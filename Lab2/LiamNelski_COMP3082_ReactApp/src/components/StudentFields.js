import { useEffect, useRef, useState } from "react";
import axios from "axios";

import apiConnection from "../api-config";

function StudentFields({ updateList, studentToEdit, clearStudentToEdit }) {
  const [isEditing, changeIsEditing] = useState(false);

  const studentNumberRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const programRef = useRef();

  useEffect(() => {
    console.log("Load Student into the values", studentToEdit);
    if (studentToEdit != null) {
      studentNumberRef.current.value = studentToEdit.studentNumber;
      firstNameRef.current.value = studentToEdit.firstName;
      lastNameRef.current.value = studentToEdit.lastName;
      addressRef.current.value = studentToEdit.address;
      cityRef.current.value = studentToEdit.city;
      phoneNumberRef.current.value = studentToEdit.phoneNumber;
      emailRef.current.value = studentToEdit.email;
      programRef.current.value = studentToEdit.program;

      changeIsEditing((prevValue) => {
        return true;
      });
    } else {
      studentNumberRef.current.value = "";
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      addressRef.current.value = "";
      cityRef.current.value = "";
      phoneNumberRef.current.value = "";
      emailRef.current.value = "";
      programRef.current.value = "";

      changeIsEditing((prevValue) => {
        return false;
      });
    }
  }, [studentToEdit]);

  const handleSaveButtonPress = (e) => {
    // if editing or put
    let newStudent = {
      studentNumber: Number(studentNumberRef.current.value),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
      program: phoneNumberRef.current.value,
    };

    let inputValid = true;
    for (const key in newStudent) {
      if (newStudent[key] === "") {
        inputValid = false;
        break;
      }
    }

    if (!inputValid) return;

    if (isEditing) {
      updateStudent(newStudent);
    } else {
      saveStudent(newStudent);
    }
    // if saving post
  };

  const saveStudent = (newStudent) => {
    axios
      .post(apiConnection.student, newStudent)
      .then((result) => {
        console.log("Student Added Successfully");
        updateList();
      })
      .catch((error) => {
        console.log("Failed to add student", error);
      });
  };

  const updateStudent = (newStudent) => {
    axios
      .put(apiConnection.student + "/" + newStudent.studentNumber, newStudent)
      .then((result) => {
        console.log("Student Edited Successfully");
        updateList();
      })
      .catch((error) => {
        console.log("Failed to add student", error);
      });
  };

  const handleClearButtonPress = (e) => {
    studentNumberRef.current.value = "";
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailRef.current.value = "";
    programRef.current.value = "";

    clearStudentToEdit(null);
  };

  return (
    <div className="container px-5 my-5">
      <div className="row py-2">
        <div className="col App-Col-Font">
          Student Number: <input ref={studentNumberRef}></input>
        </div>
        <div className="col App-Col-Font">
          First Name<input ref={firstNameRef}></input>
        </div>
        <div className="col App-Col-Font">
          Last Name<input ref={lastNameRef}></input>
        </div>
      </div>
      <div className="row py-2">
        <div className="col App-Col-Font">
          Address<input ref={addressRef}></input>
        </div>
        <div className="col App-Col-Font">
          City<input ref={cityRef}></input>
        </div>
      </div>
      <div className="row py-2">
        <div className="col App-Col-Font">
          Program<input ref={programRef}></input>
        </div>
        <div className="col App-Col-Font">
          Phone Number<input ref={phoneNumberRef}></input>
        </div>
        <div className="col App-Col-Font">
          Email<input ref={emailRef}></input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-light" onClick={handleClearButtonPress}>
            Clear
          </button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={handleSaveButtonPress}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentFields;
