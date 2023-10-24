// const {mongo_connect_normal}=require("./Mongo")
// function Authentication(req, res, next) {
//     const user = req.header("Username");
//     const password = req.header("Password");
//     global.name = user;
//     console.log(user, password);
//     //mongodb for auth
//     const conn3 =mongo_connect_normal()
//     require("../model/Athentication");
//     const Auth = conn3.model("Auth");

//     Auth.find({ Username: user, Password: password })
//       .then((data) => {
//         if (data.length === 0) {
//           res.sendStatus(401).send("UnAuthorized");
//         } else {
//           next();
//         }
//       })
//       .catch((error) => {
//         res.send(error);
//       });
//   }
//   module.exports = {
//     Authentication
//   };
