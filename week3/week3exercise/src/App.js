import React from "react";

function App() {
  
  function createDescription(description) {
    return { description: description};
  }

  const AI = createDescription("Create AI Programs in C#")
  const GAME_PROGRAMMING2 = createDescription("Continue learning how to build fun robust game in Unity")
  const SIMULATIONS = createDescription("Learn the math that makes game engines go")

  return (
    <div>
      <ProgramDescription description={AI.description}></ProgramDescription>
      <ProgramDescription description={GAME_PROGRAMMING2.description}></ProgramDescription>
      <ProgramDescription description={SIMULATIONS.description}></ProgramDescription>
    </div>
  );
}

function ProgramDescription(props) {
  return (<h2>Course: {props.description}</h2>)
}

export default App;
