import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { addDoctor } from "../services/doctorService"; // Adjust based on your service structure
import { Link } from "react-router-dom";
import Home from "./home";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    specialization: "",
    contactNumber: "",
    email: "",
    hospitalAffilation: "",
    location: "",
    availableFrom: null,
    availableTill: null,
    qualification: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateTimeChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoctor(formData);
      navigate("/doctors");
      alert("Doctor added successfully!");
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Failed to add doctor. Please try again.");
    }
  };

  return (
    <>
    <Home/>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="h4" textAlign="center" mt={2}>
        <strong>Add New Doctor</strong>
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          width: "90%",
          marginInline: "auto",
          marginTop: 5,
        }}
      >
        <TextField
          label="Doctor Name"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Contact Number"
          name="contactNumber"
          type="text"
          value={formData.contactNumber}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Hospital Affiliation"
          name="hospitalAffilation"
          value={formData.hospitalAffilation}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          fullWidth
          required
        />
        <DateTimePicker
          label="Available From"
          value={formData.availableFrom}
          onChange={(value) => handleDateTimeChange("availableFrom", value)}
          renderInput={(params) => <TextField {...params} fullWidth />}
          required
        />
        <DateTimePicker
          label="Available Till"
          value={formData.availableTill}
          onChange={(value) => handleDateTimeChange("availableTill", value)}
          renderInput={(params) => <TextField {...params} fullWidth />}
          required
        />
        <TextField
          label="Qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ gridColumn: "1 / 3" }}
        >
          Submit
        </Button>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </Box>
    </LocalizationProvider>
    </>
  );
};

export default AddDoctor;
