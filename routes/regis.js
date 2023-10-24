// const router = require("express").Router();
// const mongo = require("mongoose");
// const { mongo_connect_normal } = require("../Controller/Mongo");
// router.post("/:name/:pass/:email/:pn", (req, res) => {
//   // data needed to create Profile
//   const user = {
//     Username: req.params.name,
//     Password: req.params.pass,
//     Email: req.params.email,
//     Phonenumber: req.params.pn,
//   };

//   console.log(user);
//   const conn2 = mongo_connect_normal();
//   require("../model/Athentication");
//   const Auth = conn2.model("Auth");
//   new Auth(user).save().then((con) => console.log("User has been Created"));
// });

// module.exports = router;
