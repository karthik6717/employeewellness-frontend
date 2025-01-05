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
import AddEvent from "./components/AddEvent";
import EventHome from "./components/EventHome";
import EventRead from "./components/EventRead";
import EventUpdate from "./components/EventUpdate";
import EventSearch from "./components/EventSearch";
import AddDoctor from "./components/AddDoctor";
import DoctorHome from "./components/DoctorHome";
import DoctorRead from "./components/DoctorRead";
import DoctorUpdate from "./components/DoctorUpdate";
import DoctorSearch from "./components/DoctorSearch";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/add-employee" element={<EmployeeDetails />} />
        <Route path="/employees" element={<EmployeeHome />} />
        <Route path='/employeeRead/:employeeId' element={<EmployeeRead/>}/>
        <Route path='/employeeUpdate/:employeeId' element={<EmployeeUpdate/>}/>
        <Route path='/employeeSearch' element={<EmployeeSearch/>}/>

        {/*Challege*/}

        <Route path="/addChallenge" element={<AddChallenge/>}/>
        <Route path="/challenges" element={<ChallengeHome/>}/>
        <Route path="/challenges/:employeeId" element={<ChallengeHome/>}/>
        <Route path="/challengeRead/:challengeId" element={<ChallengeRead/>}/>
        <Route path="/challengeUpdate/:challengeId" element={<ChallengeUpdate/>}/>
        <Route path="/challengeSearch" element={<ChallengeSearch/>}/>

        {/* wellness program */}

       <Route path="/addWellnessprogram" element={<AddWellnessProgram/>}/>
       <Route path="/wellnessProgram" element={<WellnessHome/>}/>
       <Route path="/wellnessProgramRead/:wellnessProgramId" element={<WellnessProgramRead/>}/>
       <Route path="/wellnessUpdate/:wellnessProgramId" element={<WellnessUpdate/>}/>
       <Route path="/wellnessSearch" element={<WellnessSearch/>}/>

       {/*Event */}
       <Route path="/addEvent" element={<AddEvent/>}/>
       <Route path="/event" element={<EventHome/>}/>
       <Route path="/eventRead/:eventId" element={<EventRead/>}/>
       <Route path="/eventUpdate/:eventId" element={<EventUpdate/>}/>
       <Route path="/eventSearch" element={<EventSearch/>}/>

       {/*Event */}
       <Route path='/addDoctor' element={<AddDoctor/>}/>
       <Route path='/doctor' element={<DoctorHome/>}/>
       <Route path='/doctorRead/:doctorId' element={<DoctorRead/>}/>
       <Route path='/doctorUpdate/:doctorId' element={<DoctorUpdate/>}/>
       <Route path='/doctorSearch' element={<DoctorSearch/>}/>

       
      </Routes>
    </Router>
  );
}

export default App;
