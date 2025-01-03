import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getChallengeById } from '../services/challengeService';

function ChallengeSearch() {
  const [challengeId, setChallengeId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (!challengeId) {
      setError('Please enter a valid Challenge ID.');
      return;
    }

    getChallengeById(challengeId)
      .then((response) => {
        setError('');
        // If challenge data is found, navigate to ChallengeRead page with challengeId
        navigate(`/challengeRead/${challengeId}`);
      })
      .catch((err) => {
        setError('Challenge not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Search Challenge By ID</h1>
      <div className="w-50 p-4 bg-white rounded shadow">
        <div className="mb-3">
          <label htmlFor="challengeId" className="form-label">
            Challenge ID
          </label>
          <input
            type="text"
            id="challengeId"
            value={challengeId}
            onChange={(e) => setChallengeId(e.target.value)}
            className="form-control"
            placeholder="Enter Challenge ID"
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

export default ChallengeSearch;
