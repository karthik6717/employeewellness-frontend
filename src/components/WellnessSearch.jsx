import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getWellnessProgramById } from "../services/wellnessprogramService"; // Import the service function for wellness

function WellnessSearch() {
  const [wellnessId, setWellnessId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (!wellnessId) {
      setError('Please enter a valid Wellness ID.');
      return;
    }

    getWellnessProgramById(wellnessId)
      .then((response) => {
        setError('');
        // If wellness data is found, navigate to WellnessRead page with wellnessId
        navigate(`/wellnessProgramRead/${wellnessId}`);
      })
      .catch((err) => {
        setError('Wellness not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Search Wellness By ID</h1>
      <div className="w-50 p-4 bg-white rounded shadow">
        <div className="mb-3">
          <label htmlFor="wellnessId" className="form-label">
            Wellness ID
          </label>
          <input
            type="text"
            id="wellnessId"
            value={wellnessId}
            onChange={(e) => setWellnessId(e.target.value)}
            className="form-control"
            placeholder="Enter Wellness ID"
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

export default WellnessSearch;
