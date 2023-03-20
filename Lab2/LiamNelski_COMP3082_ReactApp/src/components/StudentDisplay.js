import React from "react";
import Modal from "react-modal"

function StudentDisplay({ student, onEditStudent, onDeleteStudent }) {

    const handelEditButton = (e) => {
        onEditStudent(student);
    }

    const handelDeleteButton = () => {
        onDeleteStudent(student);
    }


  return (
    <div className="row">
      <div className="col App-Col-Font">{student.studentNumber}</div>
      <div className="col App-Col-Font">
        {student.lastName}, {student.firstName}
      </div>
      <div className="col App-Col-Font">
        {student.address}, {student.city}
      </div>
      <div className="col App-Col-Font">
        {student.phoneNumber}, {student.email}
      </div>
      <div className="col App-Col-Font">
        <button className="btn btn-light" onClick={handelEditButton}>Edit</button>
        <button className="btn btn-light" onClick={handelDeleteButton}>Delete</button>
      </div>
    </div>
  );
}

export default StudentDisplay;
