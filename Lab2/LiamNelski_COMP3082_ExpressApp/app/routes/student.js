var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Student.find().then((result) => {
    res.status(200).json(result);
  });
});

router.post("/", function (req, res, next) {
  const student = new Student();

  student.studentNumber = req.body.studentNumber;
  student.firstName = req.body.firstName;
  student.lastName = req.body.lastName;
  student.address = req.body.address;
  student.city = req.body.city;
  student.phoneNumber = req.body.phoneNumber;
  student.email = req.body.email;
  student.program = req.body.program;

  Student.find({
    $or: [{ studentNumber: student.studentNumber }],
  })
    .then((result) => {
      console.log("Query Result", result);
      if (result.length > 0) {
        res.status(422).send({
          message:
            "Student cannot be posted either student number or email is in use",
        });
      } else {
        student.save();
        res.status(200).json(student);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err,
      });
    });
});

router.put("/:studentNumber", function (req, res, next) {
  Student.findOneAndUpdate(
    { studentNumber: req.body.studentNumber },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      program: req.body.program,
    }
  )
    .then((result) => {
      console.log("Put Result", result);
      res.status(200).send();
    })
    .catch((err) => {
      console.log("Put Error", err);
      res.status(500).send({
        message: err,
      });
    });
});

router.delete("/", function (req, res, next) {
  console.log(req.body);

  Student.findOneAndDelete({ studentNumber: req.body.studentNumber })
    .then((result) => {
      console.log("Delete Result", result);
      res.status(200).send();
    })
    .catch((err) => {
      console.log("Delete Error", err);
      res.status(500).send({
        message: err,
      });
    });
});

module.exports = router;
