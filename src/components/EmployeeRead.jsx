import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {  getEmployeebyId } from "../services/employeeService";

function EmployeeRead() {
  const [data, setData] = useState([]);
  const { employeeId } = useParams();
  useEffect(() => {
    getEmployeebyId(employeeId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [employeeId]);
  return (
    <div className="d-flex  justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 round">
        <h3>Details of User</h3>
        <div className="mb-2">
          <strong>EmployeeID:{data.employeeId}</strong>
        </div>

        <div className="mb-2">
          <strong>First Name:{data.firstName}</strong>
        </div>
        <div className="mb-2">
          <strong>Last Name:{data.lastName}</strong>
        </div>
        <div className="mb-2">
          <strong>Email:{data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Password:{data.password}</strong>
        </div>
        <div className="mb-2">
          <strong>Contact Number:{data.contactNumber}</strong>
        </div>
        <div className="mb-2">
          <strong>Department:{data.department}</strong>
        </div>
        <div className="mb-2">
          <strong>DateOfBirth:{data.dateOfBirth}</strong>
        </div>
        <div className="mb-2">
          <strong>Gender:{data.gender}</strong>
        </div>
        <div className="mb-2">
          <strong>Weight:{data.weight}</strong>
        </div>
        <div className="mb-2">
          <strong>Height:{data.height}</strong>
        </div>
        <div className="mb-2">
          <strong>Role:{data.role}</strong>
        </div>
        <div className="mb-2">
          <strong>DateOfJoining:{data.dateOfJoining}</strong>
        </div>
        <div className="mb-2">
          <strong>Hobbies:{data.hobbies}</strong>
        </div>
        <div className="mb-2">
          <strong>Address:{data.address}</strong>
        </div>
        <div className="mb-2">
          <strong>SportsInterest:{data.sportsInterest}</strong>
        </div>
        <div className="mb-2">
          <strong>MedicalHistory:{data.medicalHistory}</strong>
        </div>
        <div className="mb-2">
          <strong>EmergencyContact:{data.emergencyContact}</strong>
        </div>
        <div className="mb-2">
          <strong>BloodGroup:{data.bloodGroup}</strong>
        </div>
        <div className="mb-2">
          <strong>MaritalStatus:{data.maritalStatus}</strong>
        </div>
        <div className="mb-2">
          <strong>nationality:{data.nationality}</strong>
        </div>
        <div className="mb-2">
          <strong>TotalRewardPoints:{data.totalRewardPoints}</strong>
        </div>

        <Link to={`/employeeUpdate/${employeeId}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default EmployeeRead;
