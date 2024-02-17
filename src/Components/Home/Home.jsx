import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import dp from "../../assets/dp.jpg";
import "./index.css";

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
          height: "100vh",
          width: "50%",
          border: "solid",
          borderColor: "black",
        }}
      >
        <h1>Center</h1>
      </Box>
      <Box
        sx={{
          margin: "2px",
          height: "100vh",
          width: "25%",
          border: "solid",
          borderColor: "black",
        }}
      >
        <h1>Right</h1>
      </Box>
    </Container>
  );
};

export default Home;
