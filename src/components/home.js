import React, { useState } from "react";
import {
  Stack,
 Container,
  Menu,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
} from "@mui/material";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Employees",
    id: "employees",
    dropdown: [
      { label: "Add Employee", path: "/add-employee" },
      { label: "Get All Employees", path: "/employees" },
      { label: "Get Employee By Id", path: "/employeeSearch" },
      { label: "Update Employee Details", path: "/employees" },
      { label: "Delete Employee", path: "/employees" },
    ],
  },
  {
    name: "Challenges",
    id: "challenge",
    dropdown: [
      { label: "Add Challenge", path: "/addChallenge" },
      { label: "Get All Challenges", path: "/challenges" },
      { label: "Get Challenge By Id", path: "/challengeSearch" },
      { label: "Update Challenge", path: "/challenges" },
      { label: "Delete Challenge", path: "/challenges" },
    ],
  },
  {
    name: "Wellness Program",
    id: "wellnessprogram",
    dropdown: [
      { label: "Add Wellness Program", path: "/addWellnessprogram" },
      { label: "Get All Wellness Programs", path: "/wellnessProgram" },
      { label: "Get Wellness Program By Id", path: "/WellnessSearch" },
      { label: "Update Wellness Program", path: "/wellnessProgram" },
      { label: "Delete Wellness Program", path: "/wellnessProgram" },
    ],
  },
  {
    name: "Events",
    id: "events",
    dropdown: [
      { label: "Add Events", path: "/add-event" },
      { label: "Get All Events", path: "/events" },
      { label: "Get Event By Id", path: "/event/:id" },
      { label: "Update Event", path: "/update-event" },
      { label: "Delete Event", path: "/delete-event" },
    ],
  },
  {
    name: "Doctor appointment",
    id: "doctor",
    dropdown: [
      { label: "Add Doctor", path: "/add-doctor" },
      { label: "Update Doctor", path: "/update-doctor" },
      { label: "Delete doctor", path: "/delete-doctor" },
    ],
  },
];

function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState([]);
  const navigate = useNavigate();

  const handleMenuOpen = (event, dropdown) => {
    setAnchorEl(event.currentTarget);
    setCurrentDropdown(dropdown);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentDropdown([]);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "green" }}>
      <Container sx={{ width: "100%", margin: "0px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <SelfImprovementIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            EmployeeWellness
          </Typography>
          <Stack direction="row" gap={3} sx={{ marginLeft: "auto" }}>
            {pages.map((page) => (
              <React.Fragment key={page.id}>
                <Button
                  sx={{
                    color: "white",
                    textTransform: "none",
                  }}
                  onClick={
                    page.dropdown.length > 0
                      ? (event) => handleMenuOpen(event, page.dropdown)
                      : null
                  }
                >
                  {page.name}
                </Button>
              </React.Fragment>
            ))}
          </Stack>
        </Toolbar>
      </Container>
      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "none",
            border: "1px solid #ddd",
          },
        }}
      >
        {currentDropdown.map((item, index) => (
          <MenuItem key={index} onClick={() => handleNavigate(item.path)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default Home;
