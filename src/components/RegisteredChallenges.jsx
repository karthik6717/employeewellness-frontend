import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
} from "@mui/material";
import { getRegisterdChallenges } from "../services/challengeService"; // Import API service

const RegisteredChallenges = ({employeeId}) => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //const employeeId =2;
  console.log(employeeId)


  useEffect(() => {
    if (employeeId) {
      setLoading(true);
      getRegisterdChallenges(employeeId)
        .then((response) => {
          setChallenges(response.data);
        })
        .catch((error) => {
          setError("Failed to fetch challenges. Please try again.");
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [employeeId]);

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Registered Challenges
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : challenges.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Challenge ID</TableCell>
                <TableCell>Challenge Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Reward Points</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {challenges.map((challenge) => (
                <TableRow key={challenge.challengeRegistrationId}>
                  <TableCell>{challenge.challengeId}</TableCell>
                  <TableCell>{challenge.challengeName}</TableCell>
                  <TableCell>{challenge.startDate}</TableCell>
                  <TableCell>{challenge.endDate}</TableCell>
                  <TableCell>{challenge.rewardPoints}</TableCell>
                  <TableCell>{challenge.description}</TableCell>
                  <TableCell>{challenge.challengeStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No challenges found for this employee.</Typography>
      )}
    </Paper>
  );
};

RegisteredChallenges.propTypes = {
    employeeId: PropTypes.number.isRequired, // Validate that employeeId is a required number
  };
  

export default RegisteredChallenges;
