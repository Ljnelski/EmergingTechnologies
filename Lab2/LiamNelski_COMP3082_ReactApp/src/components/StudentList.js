import React from "react";
import StudentDisplay from "./StudentDisplay";

function StudentList({ students, onEditStudent, onDeleteStudent }) {
  return (
    <div className="container">
      <div className="row App-Table-Header">
        <div className="col">Number</div>
        <div className="col">Name</div>
        <div className="col">Address</div>
        <div className="col">Contact</div>
        <div className="col">Course</div>
        <div className="col"></div>
      </div>
      {students.map((student) => {
        return (
          <StudentDisplay
            key={student.studentNumber}
            student={student}
            onEditStudent={onEditStudent}
            onDeleteStudent={onDeleteStudent}
          ></StudentDisplay>
        );
      })}
    </div>
  );
}

export default StudentList;
