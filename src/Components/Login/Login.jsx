import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoginPage = false }) => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(fullName, password);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("password", password);
    navigate("/home");
  };
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        width: "80vw",
        height: "100vh",
        margin: "20px",
        borderRadius: "6px",
        paddingBottom: "10px",
      }}
    >
      <Box className="loginBox">
        <h2 className="heading heading2">Chat app </h2>
        <h2 className="heading heading2">
          {isLoginPage ? "Login" : "SignUp"}{" "}
        </h2>

        <Box
          sx={{
            width: "80%",
            alignSelf: "center",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid aqua",
          }}
          component="form"
          onSubmit={handleLogin}
        >
          {!isLoginPage && (
            <label className="label">
              Name :
              <TextField
                size="small"
                label="Name"
                name="name"
                type="text"
                variant="outlined"
                autoComplete={fullName}
                required
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
              />
            </label>
          )}

          <label className="label">
            Email :
            <TextField
              size="small"
              label="Email"
              name="name"
              type="text"
              variant="outlined"
              autoComplete={email}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label">
            Password :
            <TextField
              size="small"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              autoComplete={password}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button
            component="button"
            type="submit"
            variant="contained"
            sx={{ alignSelf: "center" }}
          >
            {isLoginPage ? "Login" : "SignUp"}
          </Button>
          <div>
            {isLoginPage
              ? "Didn't have an account?"
              : "Alredy have an account?"}
            <Button
              onClick={() =>
                navigate(`/users/${isLoginPage ? "signup" : "login"}`)
              }
            >
              {isLoginPage ? "Sign up" : "Login"}{" "}
            </Button>
          </div>
        </Box>
      </Box>
    </Grid>
  );
};
export default Login;
