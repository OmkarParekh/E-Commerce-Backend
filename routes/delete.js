// const router = require("express").Router();
// const { mongo_connect_normal } = require("../Controller/Mongo");
// // mongoose
// // const mongo = require("mongoose");
// const conn1 = mongo_connect_normal();
// // model for Mongo db
// require("../model/admin");
// const Admin = conn1.model("Seller");
// const fs = require("fs");

// // delete data
// router.post("/:pid/:Username/:filename", (req, res) => {
//   Admin.deleteOne({ pid: req.params.pname }).then(() => {
//     console.log(`Data Deleted of this Productid ${req.params.pid}`);
//   });
//   const conn2 = mongo.createConnection(
//     `mongodb+srv://king:king@cluster0-igyq9.mongodb.net/${req.params.Username}?retryWrites=true&w=majority`
//   );
//   require("../model/user");
//   const User = conn2.model("data");
//   User.deleteOne({ pid: req.params.pid }).then(() => {
//     console.log(`Data Deleted of this Productid ${req.params.pid}`);
//   });
//   const path = `./public/uploads/${req.params.filename}`;
//   fs.unlink(path, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     //file removed
//   });
// });

// module.exports = router;
