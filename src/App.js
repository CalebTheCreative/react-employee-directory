// ==================================
// Dependencies
// ==================================
import React from "react";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";

// ==================================
// App
// ==================================
function App() {
  return (
    <div className="container-fluid">
      <Jumbotron />
      <Results />
    </div>
  );
}

export default App;
