import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography,Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
//import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { login } from "../services/loginService";


const Login = () => {

  const [formData,setFormData] = useState({
    username:"",
    password:"",
  });
   
  const navigate = useNavigate();

  const handleChange =(e) =>{
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await login(formData);
      const token = response.data; // Adjust this line based on the actual response structure
      localStorage.setItem("token", token);
      navigate("/dashboard");
      //alert("Successfully logged in");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
  };


  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatrStyle = { backgroundColor: "green" };


  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatrStyle}>
            {" "}
            <LockOutlinedIcon />{" "}
          </Avatar>
          <h2> Welcome !</h2>
        </Grid>
        <TextField
          id="outlined-basic"
          label="Username"
          name="username"
          variant="outlined"
          placeholder="Enter username"
          fullWidth
          required
          onChange={handleChange}
          color="success"
        
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          placeholder="Enter Password"
          fullWidth
          required
          onChange={handleChange}
          color="success"
          sx={{ marginBottom: 2 }}
        />
        <Button
          sx={{
            backgroundColor: "green",
            marginBottom:2,
            "&:hover": {
                backgroundColor: "green",
            },
          }}
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          
        >
          Sign In
        </Button>
        <Typography>
           <Link color='#000000' href="#">Forgot Password? </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
