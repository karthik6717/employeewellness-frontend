import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TextField, MenuItem, Button } from '@mui/material';
import { getWellnessProgramById, updateWellness } from '../services/wellnessprogramService';

function WellnessUpdate() {
  const { wellnessProgramId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    wellnessProgramId: '',
    programName: '',
    description: '',
    programType: '',
    startDate: '',
    endDate: '',
    maxParticipants: '',
    venue: '',
    locationType: '',
  });

  useEffect(() => {
    getWellnessProgramById(wellnessProgramId)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((err) => console.error(err));
  }, [wellnessProgramId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateWellness(formData);
      alert('Wellness Program updated successfully');
      navigate('/');
    } catch (err) {
      alert('Failed to update the wellness program. Please try again.');
    }
  };

  return (
    <div className="d-flex flex-column align-items-center bg-light vh-100">
      <div className="w-50 bg-white p-4 rounded shadow">
        <h1>Update Wellness Program</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Program Name"
            name="programName"
            value={formData.programName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            select
            label="Program Type"
            name="programType"
            value={formData.programType}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          >
            <MenuItem value="FITNESS">FITNESS</MenuItem>
            <MenuItem value="MENTALHEALTH">MENTAL HEALTH</MenuItem>
            <MenuItem value="NUTRITION">NUTRITION</MenuItem>
            <MenuItem value="STRESSMANAGEMENT">STRESS MANAGEMENT</MenuItem>
          </TextField>
          <TextField
            type="date"
            label="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            type="date"
            label="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            margin="normal"
          />
          <TextField
            label="Max Participants"
            name="maxParticipants"
            type="number"
            value={formData.maxParticipants}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Location Type"
            name="locationType"
            value={formData.locationType}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Program
          </Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" fullWidth className="mt-2">
              Cancel
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default WellnessUpdate;
