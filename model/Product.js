const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Craete Structure

const ProductSchema = new Schema({
  pname: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ptype: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: false,
  },
  path: {
    type: String,
    required: true,
  },
});
mongoose.model("Products", ProductSchema);
