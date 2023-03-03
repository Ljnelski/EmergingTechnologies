let student = {
  firstName: "Josh",
  lastName: "Harbiginer",
  programName: "SET",
};

let programs = ["SET", "AI", "SIM", "G-P", "HIT", "WD1"];

function changeProgram(student, newProgram) {
  if (!student) {
    console.log("changeProgram ERROR: Student parameter Is Null");
    return { ...student };
  }
  if (!student.programName) {
    console.log(
      "changeProgram ERROR: Student does not have property programName or is Null"
    );
    return { ...student };
  }

  return {
    ...student,
    programName: newProgram,
  };
}

// > I Know how to do it both ways professor!

// const changeProgram = (student, newProgram) => {
//     if(!student) {
//         console.log("changeProgram ERROR: Student parameter Is Null")
//         return {...student};
//     }
//     if(!student.programName) {
//         console.log("changeProgram ERROR: Student does not have property programName or is Null")
//         return {...student};
//     }

//     return {
//         ...student,
//         programName: newProgram
//     }
// }

console.log("Orignal Student: ", student);
console.log("Student in function: ", changeProgram(student, "NewProgram"));
console.log("Orginal Student After function: ", student);

console.log(
  "\n\n\nHere is the list of programs via the map function:",
  
);
programs.map((program) => {
    console.log(program);
  })
