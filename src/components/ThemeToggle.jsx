import React from "react";
import { Box, Switch, Typography } from "@mui/material";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  const handleChange = () => setDarkMode(!darkMode);

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
      <Typography variant="body2" mr={1}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Typography>
      <Switch checked={darkMode} onChange={handleChange} />
    </Box>
  );
}
