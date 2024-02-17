import React from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import dp from "../../assets/dp.jpg";
import "./index.css";
import SendIcon from "@mui/icons-material/Send";

const Home = () => {
  const users = [
    {
      name: "Munna",
      status: "Available",
      img: dp,
    },
    {
      name: "Rohit",
      status: "Available",
      img: dp,
    },
    {
      name: "Alex",
      status: "Available",
      img: dp,
    },
    {
      name: "Sheru",
      status: "Available",
      img: dp,
    },
    {
      name: "Larry",
      status: "Available",
      img: dp,
    },
    {
      name: "Tillu",
      status: "Available",
      img: dp,
    },
  ];
  return (
    <Container
      minWidth="sm"
      sx={{
        padding: "0",
        height: "100%",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          p: "4px",
          height: "100%",
          width: "25%",
          bgcolor: "skyblue",
        }}
      >
        <div className="flex items-center my-8 mx-14">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={dp} alt="dp" className="dp" />
            <div className="ml-8">
              <h3 className="heading">name</h3>
              <p className="heading2">My Account</p>
            </div>
          </Box>
          <h1 className="heading2">Messages</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {users.map(({ name, status, img }) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "solid 1px",
                    borderRadius: "5px",
                    m: "1px",
                  }}
                >
                  <img src={img} alt="dp" className="dp" />
                  <div className="name_box">
                    <h3 className="name">{name}</h3>
                    <p className="name">{status}</p>
                  </div>
                </Box>
              );
            })}
          </Box>
        </div>
      </Box>
      <Box
        sx={{
          margin: "2px",
          height: "100",
          width: "75%",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            width: "70",
            height: "80px",
            borderRadius: "6px",
            bgcolor: "blue",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            m: "8px",
            pt: "10px",
          }}
        >
          <img src={dp} alt="dp" className="dp" />
          <h3 className="name">name</h3>
        </Box>

        <Box sx={{ height: "100vh", bgcolor: "white" }}>
          <h3 className="heading"> Chat</h3>
        </Box>
        <Box sx={{ width: "100%", bgcolor: "white" }}>
          <input className="input" placeholder="Type Message" type="text" />
          <Button type="button">
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
