import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
//import AddEmployee from "./components/EmployeeDetails"; 
import EmployeeHome from "./components/EmployeeHome"; 
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeRead from "./components/EmployeeRead";
import EmployeeUpdate from "./components/EmployeeUpdate";
import EmployeeSearch from "./components/EmployeeSearch";
//import GetAllEmployees from "./components/EmployeeTable";

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
       

        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;
