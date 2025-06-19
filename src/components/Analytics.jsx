import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";

export default function Analytics() {
  return (
    <Box my={2}>
      <Typography variant="h6" gutterBottom>
        Analytics
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <VisibilityIcon color="primary" />
                <Typography variant="subtitle2">81 profile views</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <PersonIcon color="primary" />
                <Typography variant="subtitle2">271 post impressions</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <SearchIcon color="primary" />
                <Typography variant="subtitle2">80 search appearances</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
