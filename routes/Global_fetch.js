const router = require("express").Router();
const { mongo_connect_normal } = require("../Controller/Mongo");
// mongoose
// const mongo = require("mongoose");
const conn1 = mongo_connect_normal();

// model for Mongo db
require("../model/admin");
const Admin = conn1.model("Seller");

// fetching the data from data base
router.get("/", (req, res) => {
  Admin.find({})
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

module.exports = router;
