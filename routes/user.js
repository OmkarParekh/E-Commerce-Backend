const router = require("express").Router();
const { mongo_connect_normal } = require("../Controller/Mongo");

// json web token
// const jwt = require("jsonwebtoken");
// mongo
const mongo = require("mongoose");
conn1 = mongo_connect_normal();
require("../model/user");
const UserModel = conn1.model("Users");

// Infromation of product
router.post("/add", async(req, res) => {
    var already=await UserModel.find();
    for(var i in already){
        if(req.body.username==already[i].username){
            res.send({
                Status:"Failed to Add user",
                data:`${req.body.username} is already Exist`
            })
            return;
        }
        else if (req.body.email==already[i].email) {
            res.send({
                Status:"Failed to Add user",
                data:`${req.body.email} is already Exist`
            })
            return;
        }
        else if (req.body.number==already[i].number) {
            res.send({
                Status:"Failed to Add user",
                data:`${req.body.number} is already Exist`
            })
            return;
        }
    }
  const user = {
      username: req.body.username,
      password:req.body.password,
      name:req.body.name,
      role: req.body.role,
      email: req.body.email,
      number:req.body.number,
     
  };
  // console.log(Product);
  new UserModel(user)
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
    UserModel.findOneAndDelete({ _id: req.params.id })
    .then((con) => {
      res.send({
        Status: "Product Deleted Successfully",
        data: con,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
router.get("/", (req, res) => {
    UserModel.find()
    .then((con) => {
      res.send({
        Status: "User Fetch Successfully",
        data: con,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});
module.exports = router;
