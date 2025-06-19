import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  InputBase,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side: Logo + Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
            alt="LinkedIn"
            width={32}
          />
          <Typography variant="h6" color="black" sx={{ fontWeight: "bold" }}>
            LinkedIn
          </Typography>

          {/* 🔍 Search Bar */}
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              p: "2px 8px",
              ml: 2,
              width: 250,
              backgroundColor: "#edf3f8",
              borderRadius: 2,
            }}
          >
            <SearchIcon sx={{ color: "#5e5e5e" }} />
            <InputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              sx={{ ml: 1, flex: 1 }}
            />
          </Paper>
        </Box>

        {/* Right Side: Icons + Avatar */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <IconButton><HomeIcon /></IconButton>
          <IconButton><PeopleIcon /></IconButton>
          <IconButton><WorkIcon /></IconButton>
          <IconButton><MessageIcon /></IconButton>
          <IconButton><NotificationsIcon /></IconButton>
          <Avatar
            src="https://media.licdn.com/dms/image/D4D03AQGcWnoeGlYTrw/profile-displayphoto-shrink_200_200/0/1688379787478?e=1722470400&v=beta&t=f6XOxTFr_vD5e4ayLPt4hESsKNfwkGxa3TAkmxuVvfc"
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
