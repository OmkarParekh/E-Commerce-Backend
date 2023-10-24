const Express = require("express");
const { mongo_connect_serverjs } = require("./Controller/Mongo");

// fs
var fs = require("fs");
var dir = "./public/";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// dotenv
require("dotenv").config();

// mongoose Calling
mongo_connect_serverjs();

// Listening on port
const app = Express();
app.listen(process.env.PORT || 5000);

// Body Parser
const bodyparser = require("body-parser");
app.use(bodyparser.json());
// For Cors Error

const cors = require("cors");
app.use(cors());

// Routes
// Registration of seller
// app.use("/registration", require("./routes/regis"));
app.get("/", (req, res) => {
  res.send("hello");
});
// Add the product
app.use("/product", require("./routes/Product"));
app.use("/user", require("./routes/user"));
//  Global fetch
// app.use("/gfetch", require("./routes/Global_fetch"));
// Local fetch
// // app.use("/lfetch", require("./routes/Local_fetch"));
// delete data
// app.use("/delete", require("./routes/delete"));

// middleware status
app.use((err, req, res, next) => res.status(err.statusCode).send(err));

// public Folder set static
app.use(Express.static(__dirname + "/public"));
