import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const widgets = [
  { title: "People you may know", content: "Nikhil, Priya, Manish" },
  { title: "Suggested skills", content: "React, TypeScript, Figma" },
];

export default function Widgets() {
  return (
    <Box my={2}>
      <Typography variant="h6" gutterBottom>
        Widgets
      </Typography>
      {widgets.map((widget, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">{widget.title}</Typography>
            <Typography variant="body2">{widget.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
