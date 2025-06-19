import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";

const connections = [
  { name: "Anusha", avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Praveen", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Kiran", avatar: "https://i.pravatar.cc/150?img=5" },
];

export default function Connections() {
  return (
    <Box my={2}>
      <Typography variant="h6" gutterBottom>
        Connections
      </Typography>
      <Stack direction="row" spacing={2}>
        {connections.map((person, index) => (
          <Box key={index} textAlign="center">
            <Avatar alt={person.name} src={person.avatar} />
            <Typography variant="body2">{person.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
