import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Sowmya Reddy");
  const [title, setTitle] = useState("Frontend Developer");

  const handleSave = () => setEditMode(false);

  return (
    <Box p={2} my={2} border={1} borderRadius={2} borderColor="grey.300">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Profile Info</Typography>
        <IconButton onClick={() => setEditMode(!editMode)}>
          {editMode ? <SaveIcon onClick={handleSave} /> : <EditIcon />}
        </IconButton>
      </Box>

      {editMode ? (
        <Box mt={2}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
        </Box>
      ) : (
        <Box mt={2}>
          <Typography>Name: {name}</Typography>
          <Typography>Title: {title}</Typography>
        </Box>
      )}
    </Box>
  );
}
