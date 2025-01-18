import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
 // Button,

} from "@mui/material";

import Home from "./home";
import { getRegisterdEvents } from "../services/eventService";

const RegisteredEvents = () => {
  const location = useLocation();
  const { employeeId } = location.state || {};

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //const [openDialog, setOpenDialog] = useState(false);
  //const [selectedChallenge, setSelectedChallenge] = useState(null);

  //console.log(props)

  useEffect(() => {
    if (employeeId) {
      setLoading(true);
      getRegisterdEvents(employeeId)
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          setError("Failed to fetch Events. Please try again.");
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [employeeId]);


  return (
    <>
      <Home />
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Registered Events
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : events.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Event ID</TableCell>
                  <TableCell>Event Name</TableCell>
                  <TableCell>Enrollment Date</TableCell>
                  <TableCell>Organizer</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.eventRegistrationId}>
                    <TableCell>{event.eventId}</TableCell>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.enrolmentDate}</TableCell>
                    <TableCell>{event.organizer}</TableCell>
                    <TableCell>{event.startDate}</TableCell>
                    <TableCell>{event.endDate}</TableCell>
                    <TableCell>{event.eventDescription}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No Events found for this employee.</Typography>
        )}
      </Paper>

      
    </>
  );
};



export default RegisteredEvents;
