const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BottleSchema = new Schema(
  {
    accountId: {
      type: String,
      //required: true,
      default: "Anonymous",
    },
    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    country: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: "blank",
      //required: true,
    },
    tags: [
      {
        type: String,
        default: [],
        //required: true,
      },
    ],
    views: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

module.exports = Bottle = mongoose.model("bottle", BottleSchema);
