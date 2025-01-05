import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getDoctorById } from '../services/doctorService'; // Import the doctor service function

function DoctorSearch() {
  const [doctorId, setDoctorId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (!doctorId) {
      setError('Please enter a valid Doctor ID.');
      return;
    }

    getDoctorById(doctorId)
      .then((response) => {
        setError('');
        // If doctor data is found, navigate to DoctorRead page with doctorId
        navigate(`/doctorRead/${doctorId}`);
      })
      .catch((err) => {
        setError('Doctor not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Search Doctor By ID</h1>
      <div className="w-50 p-4 bg-white rounded shadow">
        <div className="mb-3">
          <label htmlFor="doctorId" className="form-label">
            Doctor ID
          </label>
          <input
            type="text"
            id="doctorId"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="form-control"
            placeholder="Enter Doctor ID"
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

export default DoctorSearch;
