const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken =
  "pk.eyJ1IjoidGhlaXZhbmh1IiwiYSI6ImNrb3o1OTRjbzBlc3QydW13dzRwNTQ5ZzAifQ.TYOeMJm3K0sBOgk74LNVtA";
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
// Bottle Model
const Bottle = require("../../models/Bottle");

// @route   GET api/bottles
// @desc    Get All Bottles
// @access  Public
router.get("/", (req, res) => {
  Bottle.find()
    .then((items) => res.json(items))
    .catch(() => res.status(500).json({ msg: "Error", success: false }));
});

// @route   GET api/bottles/:bottleId
// @desc    Get A Bottle
// @access  Public
router.get("/:bottleId", (req, res) => {
  Bottle.findById(req.params.bottleId)
    .then((bottle) => {
      if (bottle == null)
        res.status(404).json({ msg: "Bottle not found", success: false });
      else res.json(bottle);
    })
    .catch((err) => {
      if (err.path == "_id")
        res
          .status(400)
          .json({ msg: "Bottle ID not properly formatted", success: false });
      else res.status(500).json({ msg: "Error", success: false });
    });
});

// @route   POST api/bottles
// @desc    Create A Bottle
// @access  Private
router.post("/", auth, (req, res) => {
  if (!req.body.accountId || !req.body.country) {
    return res
      .status(400)
      .json({ msg: "Need account ID and country", success: false });
  }
  geocoder
    .forwardGeocode({
      query: req.body.country,
      limit: 1,
    })
    .send();

  const newBottle = new Bottle({
    accountId: req.body.accountId,
    country: req.body.country,
    geometry: geoData.body.features[0].geometry,
    editDate: req.body.editDate,
    message: req.body.message,
    tags: req.body.tags,
    views: req.body.views,
  });
  newBottle
    .save()
    .then((bottle) => res.json(bottle))
    .catch(() => res.status(500).json({ msg: "Error", success: false }));
});

// @route   POST api/bottles/:bottleId/edit
// @desc    Edit A Bottle
// @access  Private
router.post("/:bottleId/edit", auth, (req, res) => {
  if (!req.params.bottleId) {
    return res.status(400).json({ msg: "Need bottle ID", success: false });
  }
  Bottle.findById(req.params.bottleId).then((bottle) => {
    if (bottle == null)
      res.status(404).json({ msg: "Bottle not found", success: false });
    else {
      if (req.body.editDate) bottle.editDate = req.body.editDate;
      if (req.body.message) bottle.message = req.body.message;
      if (req.body.tags) bottle.tags = req.body.tags;
      if (req.body.views) bottle.views = req.body.views;
      bottle
        .save()
        .then((bottle) => res.json(bottle))
        .catch(() => res.status(500).json({ msg: "Error", success: false }));
    }
  });
});

// @route   DELETE api/Bottles/:bottleId
// @desc    Delete A Bottle
// @access  Private
router.delete("/:bottleId", auth, (req, res) => {
  Bottle.findById(req.params.bottleId)
    .then((bottle) => {
      if (bottle == null)
        res.status(404).json({ msg: "Bottle not found", success: false });
      else bottle.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => {
      if (err.path == "_id")
        res
          .status(400)
          .json({ msg: "Bottle ID not properly formatted", success: false });
      else res.status(500).json({ msg: "Error", success: false });
    });
});

module.exports = router;
