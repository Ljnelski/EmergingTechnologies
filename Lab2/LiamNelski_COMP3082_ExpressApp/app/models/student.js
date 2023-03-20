const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentNumber: {
    type: Number,
    unique: true,
    validate: [
      (studentNumber) => {
        return String(studentNumber).length == 9;
      },
      "student number incorrect number of digets",
    ],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  program: {
    type: String,
  },
});

mongoose.model("Student", StudentSchema);
