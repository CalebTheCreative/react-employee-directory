// ==================================
// Dependencies
// ==================================
import React from "react";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";
import Card from "./components/Card";

// ==================================
// App
// ==================================
function App() {
  return (
    <div className="container-fluid">
      <Jumbotron />
      <SearchContainer />
      <Card/>
    </div>
  );
}

export default App;
