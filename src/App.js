import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component.js";
import EditExercises from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
