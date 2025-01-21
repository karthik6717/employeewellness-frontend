import React, { useState,useEffect} from "react";
//import PropTypes from 'prop-types';
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
  Drawer,
  List,
  ListItem,
  ListItemText,
  //Divider,
  //Grow,
  CircularProgress,
  //Slide
} from "@mui/material";
//import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
//import SpaTwoToneIcon from '@mui/icons-material/SpaTwoTone';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import { useNavigate } from "react-router-dom";
import { getEmployeebyId } from "../services/employeeService";
import  {jwtDecode} from "jwt-decode";
//import RegisteredChallenges from "./RegisteredChallenges";



function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const employeeData = jwtDecode(localStorage.getItem('token'))
  const employeeId = employeeData.employeeId;
  //console.log(employeeId)




  useEffect(() => {
    if (drawerOpen && !employeeDetails) {
      setLoading(true);
      getEmployeebyId(employeeId)
        .then((response) => {
          setEmployeeDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching employee details:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [drawerOpen, employeeId, employeeDetails]);


  const pages = [
    {
      name: "Associates",
      id: "employees",
      dropdown: [
        { label: "Onboard New Talent", path: "/add-employee" },
        { label: "Browse All Profiles", path: "/employees" },
        { label: "Lookup Associate ", path: "/employeeSearch" },
        { label: "Refine Associate Profile", path: "/employees" },
        { label: "Farewell to Associates", path: "/employees" },
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
        { label: "Registered Challenges", path: "/registeredChallenges",state:{employeeId} },
  
      ],
    },
    {
     // icon:"/images/png_3r4o2f.png",
      name: "Wellness Program",
      id: "wellnessprogram",
      dropdown: [
        { label: "Add Wellness Program", path: "/addWellnessprogram" },
        { label: "Get All Wellness Programs", path: "/wellnessProgram" ,state:{employeeId} },
        { label: "Get Wellness Program By Id", path: "/WellnessSearch" },
        { label: "Update Wellness Program", path: "/wellnessProgram" },
        { label: "Delete Wellness Program", path: "/wellnessProgram" },
        {label : "Registered Wellness Programs", path:"/registeredWellness",state:{employeeId}}
      ],
    },
    {
      name: "Events",
      id: "events",
      dropdown: [
        { label: "Add Events", path: "/addEvent" },
        { label: "Get All Events", path: "/event",state:{employeeId} },
        { label: "Get Event By Id", path: "/eventSearch" },
        { label: "Update Event", path: "/event" },
        { label: "Delete Event", path: "/event" },
        {label : "Registered Events", path:"/registeredEvents",state:{employeeId}}
      ],
    },
    {
      name: "Doctor appointment",
      id: "doctor",
      dropdown: [
        { label: "Get All Doctors", path: "/doctor" },
        { label: "Add Doctor", path: "/addDoctor" },
        { label: "Get doctor By Id", path: "/doctorSearch" },
        { label: "Update Doctor", path: "/doctor" },
        { label: "Delete doctor", path: "/doctor" },
      ],
    },
  ];




//console.log(employeeDetails)


  const handleMenuOpen = (event, dropdown) => {
    setAnchorEl(event.currentTarget);
    setCurrentDropdown(dropdown);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentDropdown([]);
  };

  const handleNavigate = (path, props) => {
    navigate(path, { state: props });
    handleMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: "green" }}>
      <Container sx={{ width: "100%", margin: "0px" }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            sx={{
             
              border: "2px solid white",
            }}
            aria-label="logo"
            onClick={toggleDrawer(true)}
          >
            <SpaRoundedIcon />
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
                      : () => handleNavigate(page.path, { employeeId })
                  }
                >

          {page.icon && (
          <img src={page.icon} alt={`${page.name} icon`} style={{ width: "20px", height: "20px" }}/>
        )}




                  {page.name}
                </Button>
              </React.Fragment>
            ))}

            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)} // Close drawer
      >
        {/* <List sx={{ width: 250, padding: 2 }}>
          <ListItem>
            <ListItemText primary="Profile" sx={{ fontWeight: "bold" }} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary={`Employee ID: ${employeeId}`} />
          </ListItem>
         
          <ListItem>
            <ListItemText primary={`Employee Name:&=${} `} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`role: `}/>
          </ListItem>
          <Divider />
          <ListItem button={"true"} onClick={toggleDrawer(false)}>
            <ListItemText primary="Close" />
          </ListItem>
        </List> */}

<List sx={{ width: 250, padding: 2 }}>
  <ListItem>
   <ListItemText primary="Profile" sx={{ fontWeight: "bold" }} />
   </ListItem>
   
  <ListItem>
    <ListItemText primary={`Associate ID: ${employeeId}`} />
  </ListItem>
  {loading ? (
    <ListItem>
      <CircularProgress />
    </ListItem>
  ) : (
    employeeDetails && (
      <>
        <ListItem>
          <ListItemText primary={`Associate Name: ${employeeDetails.firstName}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Mail Id: ${employeeDetails.email}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Role: ${employeeDetails.role}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Department: ${employeeDetails.department}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Blood Group: ${employeeDetails.bloodGroup}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Reward Points: ${employeeDetails.totalRewardPoints}`} />
        </ListItem>
        <ListItem button={"true"} onClick={toggleDrawer(false)}>
            <ListItemText primary="Close" />
          </ListItem>

          
           
      </>
    )
  )}
  
</List>




      </Drawer>
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
          <MenuItem key={index} onClick={() => handleNavigate(item.path, { employeeId })}
          sx={{
            
           // backgroundColor: "lightgreen", // Set background color
          //  color: "white", // Set text color
            "&:hover": {
              color: "white",
              backgroundColor: "#267a0f", // Change background on hover
            },
          }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    
    </>
  );
}



export default Home;
