const router = require("express").Router();
const { mongo_connect_normal } = require("../Controller/Mongo");

// json web token
const jwt = require("jsonwebtoken");
// mongo
const mongo = require("mongoose");
conn1 = mongo_connect_normal();
require("../model/Product");
const ProductModel = conn1.model("Products");

// Infromation of product
router.post("/add", (req, res) => {
  const Product = {
    pname: req.body.pname,
    price: req.body.price,
    filename: " ",
    path: " ",
  };
  // console.log(Product);
  new ProductModel(Product)
    .save()
    .then((con) => {
      res.send({
        Status: "Product Added Successfully",
        data: con,
      });
      // console.log("data is submitted");
    })
    .catch((err) => {
      res.send(err);
    });
});
router.delete("/delete/:id", (req, res) => {
  ProductModel.findOneAndDelete({ _id: req.params.id })
    .then((con) => {
      res.send({
        Status: "Product Deleted Successfully",
        id: req.params.id,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
