import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography,Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatrStyle = { backgroundColor: "green" };
  //  const buttonstlye={backgroundColor:'green'}

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
          label="Associate Id"
          variant="outlined"
          placeholder="Enter Associated Id"
          fullWidth
          required
          color="success"
        
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          placeholder="Enter Password"
          fullWidth
          required
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
