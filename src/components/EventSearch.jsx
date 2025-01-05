import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { getEventById } from '../services/eventService'; // Import service for fetching event details

function EventSearch() {
  const [eventId, setEventId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = () => {
    if (!eventId) {
      setError('Please enter a valid Event ID.');
      return;
    }

    getEventById(eventId)
      .then((response) => {
        setError('');
        // If event data is found, navigate to EventRead page with eventId
        navigate(`/eventRead/${eventId}`);
      })
      .catch((err) => {
        setError('Event not found. Please check the ID.');
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>Search Event By ID</h1>
      <div className="w-50 p-4 bg-white rounded shadow">
        <div className="mb-3">
          <label htmlFor="eventId" className="form-label">
            Event ID
          </label>
          <input
            type="text"
            id="eventId"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="form-control"
            placeholder="Enter Event ID"
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

export default EventSearch;
