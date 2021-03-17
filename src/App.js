// ==================================
// Dependencies
// ==================================
import React from "react";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";
import Results from "./components/Results";

// ==================================
// App
// ==================================
function App() {
  return (
    <div className="container-fluid">
      <Jumbotron />
      <SearchContainer />
      <Results />
    </div>
  );
}

export default App;
