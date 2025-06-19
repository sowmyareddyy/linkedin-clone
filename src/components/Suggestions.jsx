import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function Suggestions() {
  return (
    <Box my={2}>
      <Typography variant="h6" gutterBottom>
        Suggested for you
      </Typography>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box display="flex" gap={1} alignItems="center">
            <InfoIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              Write a summary to highlight your personality or work experience
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            Members who include a summary receive up to 3.9 times as many profile views.
          </Typography>
          <Box mt={1}>
            <Button size="small" variant="outlined">Add a summary</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
