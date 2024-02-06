import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navBar"
import ExercisesList from "./components/exercisesList";
import EditExercise from "./components/editExercises";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

function App() {
  return (
 <Router>
   <div className="container">
     <Navbar />
     {/* <EditExercise /> */}
      <br/>
         <Routes>
      <Route exact path="/" element={<ExercisesList />} />
      <Route path="/edit/:id" element={<EditExercise />}/>
      <Route path="create" element={<CreateExercise />}/>
      <Route path="user" element={<CreateUser />}/>
       </Routes>
     </div>
  </Router>
  );
}

export default App;
