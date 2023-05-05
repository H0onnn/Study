const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const CampGroundSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Campground", CampGroundSchema);
