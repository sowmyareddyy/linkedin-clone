import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";

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
        }}
      />

      {/* Avatar + Name */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: 2,
          p: 2,
          mt: -7,
          backgroundColor: "white",
        }}
      >
        <Avatar
          src="https://media.licdn.com/dms/image/D4D03AQGcWnoeGlYTrw/profile-displayphoto-shrink_200_200/0/1688379787478?e=1722470400&v=beta&t=f6XOxTFr_vD5e4ayLPt4hESsKNfwkGxa3TAkmxuVvfc"
          sx={{ width: 100, height: 100, border: "3px solid white" }}
        />
        <Box>
          <Typography variant="h6">Sowmya Reddy Vangooru ✅</Typography>
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
      <Box sx={{ display: "flex", gap: 1, px: 2, pb: 2, backgroundColor: "white" }}>
        <Button variant="contained" size="small">Open to</Button>
        <Button variant="outlined" size="small">Add profile section</Button>
        <Button variant="outlined" size="small">Enhance profile</Button>
      </Box>
    </Box>
  );
}
