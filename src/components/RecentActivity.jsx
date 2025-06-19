import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const activities = [
  "Liked a post from Ramesh",
  "Commented on a design article",
  "Updated profile title to 'Frontend Intern'",
];

export default function RecentActivity() {
  return (
    <Box my={2}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
