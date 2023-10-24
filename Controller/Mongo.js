const mongo = require("mongoose");
function mongo_connect_serverjs() {
  mongo
    .connect(process.env.mongo, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
}
function mongo_connect_normal() {
  mongo
    .connect(process.env.mongo, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {})
    .catch((err) => console.error("Could not connect to MongoDB", err));
  return mongo;
}

module.exports = {
  mongo_connect_serverjs,
  mongo_connect_normal,
};
