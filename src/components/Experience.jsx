import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "XYZ Tech",
    duration: "Jan 2024 - Apr 2024",
    description: "Built responsive pages and integrated APIs using React.js",
  },
  {
    title: "UI/UX Designer",
    company: "DesignStudio",
    duration: "May 2023 - Dec 2023",
    description: "Created wireframes and mockups for client websites",
  },
];

export default function Experience() {
  return (
    <Box my={2}>
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">{exp.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {exp.company} — {exp.duration}
            </Typography>
            <Typography variant="body2">{exp.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
