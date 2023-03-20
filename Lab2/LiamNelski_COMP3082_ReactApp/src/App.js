import axios from "axios";
import { useEffect, useState } from "react";
import apiConnection from "./api-config";
import "./App.css";
import StudentFields from "./components/StudentFields";
import StudentList from "./components/StudentList";
import ReactModal from "react-modal";

function App() {
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [studentData, setStudentData] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    axios.get(apiConnection.student).then((result) => {
      console.log(result);
      setStudentData(result.data);
    });
  };

  const deleteStudent = () => {
    closeModal();
    axios.delete(apiConnection.student, {data: studentToDelete}).then((result) => {
      loadStudents()
    });
    
  };

  const openModal = (studentToDelete) => {
    setStudentToDelete(studentToDelete);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setStudentToDelete(null);
  };

  return (
    <div className="App">
      <h1 className="App-Title">Lab2 Student Stuff</h1>
      <StudentFields
        updateList={loadStudents}
        studentToEdit={studentToEdit}
        clearStudentToEdit={setStudentToEdit}
      ></StudentFields>
      <StudentList
        students={studentData}
        onEditStudent={setStudentToEdit}
        onDeleteStudent={openModal}
      ></StudentList>
      <ReactModal isOpen={modalIsOpen} style={modalStyles}>
        <div className="row">
          <div className="col">
            <p>
              Are you Sure you want to delete {studentToDelete?.studentNumber}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-dark" onClick={deleteStudent}>
              Confirm
            </button>
          </div>
          <div className="col">
            <button className="btn btn-dark" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default App;
