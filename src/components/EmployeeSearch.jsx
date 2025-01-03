import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import {  getEmployeebyId } from "../services/employeeService";


function EmployeeSearch() {
  const [employeeId, setEmployeeId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (!employeeId) {
      setError('Please enter a valid Employee ID.');
      return;
    }

    getEmployeebyId(employeeId)
      .then((response) => {
        setError('');
        // If employee data is found, navigate to EmployeeRead page with employeeId
        navigate(`/employeeRead/${employeeId}`);
      })
      .catch((err) => {
        setError('Employee not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Search Employee By ID</h1>
      <div className="w-50 p-4 bg-white rounded shadow">
        <div className="mb-3">
          <label htmlFor="employeeId" className="form-label">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="form-control"
            placeholder="Enter Employee ID"
          />
        </div>
        <button className="btn btn-primary mb-3" onClick={handleSearch}>
          Search
        </button>

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

export default EmployeeSearch;
