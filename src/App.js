// ==================================
// Dependencies
// ==================================
import React from "react";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";

// ==================================
// App
// ==================================
function App() {
  return (
    <div>
      <Jumbotron />
      <SearchContainer />
    </div>
  );
}

export default App;
