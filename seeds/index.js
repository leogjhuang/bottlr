const cities = require("./cities");

const mongoose = require("mongoose");

const Bottle = require("../models/bottle");
const config = require("config");
// DB Config
const db = config.get("mongoURI") || "mongodb://localhost:27017/bottlr";

// Connect to Mongo
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`MongoDB Connected... on ${db}`))
  .catch((err) => console.log(err));

const seedDB = async () => {
  await Bottle.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000) + 1;
    const views = Math.floor(Math.random() * 1000);

    const c = new Bottle({
      title: `Anonymous post ${random1000}`,
      author: "60a71247118e9c76e4e51c20",
      country: `${cities[random1000].city}, ${cities[random1000].state} `,

      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      views: views,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });

    await c.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
