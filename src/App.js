import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
 import EmployeeHome from "./components/EmployeeHome"; 
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeRead from "./components/EmployeeRead";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeSearch from "./components/EmployeeSearch";
import AddChallenge from "./components/AddChallenge";
import ChallengeHome from "./components/ChallengeHome";
import ChallengeRead from "./components/ChallengeRead";
import ChallengeUpdate from "./components/ChallengeUpdate";
import ChallengeSearch from "./components/ChallengeSearch";
import AddWellnessProgram from "./components/AddWellnessprogram";
import WellnessHome from "./components/WellnessHome";
import WellnessProgramRead from "./components/WellnessProgramRead";
import WellnessUpdate from "./components/WellnessUpdate";
import WellnessSearch from "./components/WellnessSearch";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<EmployeeDetails />} />
        <Route path="/employees" element={<EmployeeHome />} />
        <Route path='/employeeRead/:employeeId' element={<EmployeeRead/>}/>
        <Route path='/employeeUpdate/:employeeId' element={<EmployeeUpdate/>}/>
        <Route path='/employeeSearch' element={<EmployeeSearch/>}/>

        {/*Challege*/}

        <Route path="/addChallenge" element={<AddChallenge/>}/>
        <Route path="/challenges" element={<ChallengeHome/>}/>
        <Route path="/challengeRead/:challengeId" element={<ChallengeRead/>}/>
        <Route path="/challengeUpdate/:challengeId" element={<ChallengeUpdate/>}/>
        <Route path="/challengeSearch" element={<ChallengeSearch/>}/>

        {/* wellness program */}

       <Route path="/addWellnessprogram" element={<AddWellnessProgram/>}/>
       <Route path="/wellnessProgram" element={<WellnessHome/>}/>
       <Route path="/wellnessProgramRead/:wellnessProgramId" element={<WellnessProgramRead/>}/>
       <Route path="/wellnessUpdate/:wellnessProgramId" element={<WellnessUpdate/>}/>
       <Route path="/wellnessSearch" element={<WellnessSearch/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
