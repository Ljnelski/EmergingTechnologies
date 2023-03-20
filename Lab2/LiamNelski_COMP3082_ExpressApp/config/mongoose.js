mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1/Lab2"

module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose
    .connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log("Error:");
      console.log(err);
    });

    // Load Models
    require("../app/models/student");
  return db;
};
