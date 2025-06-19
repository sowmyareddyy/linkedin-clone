import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import profilePic from "../assets/sowmya.jpg"; // your local image

export default function Header() {
  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3, mb: 2 }}>
      {/* Banner */}
      <Box
        sx={{
          height: 200,
          backgroundImage:
            "url('https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?semt=ais_hybrid&w=740')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      />

      {/* Content below banner */}
      <Box sx={{ backgroundColor: "white", px: 2, pb: 2 }}>
        {/* Avatar + Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 2,
            mt: -7,
          }}
        >
          <Avatar
            src={profilePic}
            alt="Sowmya"
            sx={{
              width: 100,
              height: 100,
              border: "4px solid white",
              boxShadow: 1,
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Sowmya Reddy Vangooru ✅
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Undergrad at Anurag University
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hyderabad, Telangana, India · <a href="#">Contact Info</a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              261 followers · 257 connections
            </Typography>
          </Box>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button variant="contained" size="small">Open to</Button>
          <Button variant="outlined" size="small">Add profile section</Button>
          <Button variant="outlined" size="small">Enhance profile</Button>
        </Box>
      </Box>
    </Box>
  );
}
