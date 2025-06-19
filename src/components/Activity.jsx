import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Divider,
  Button,
} from "@mui/material";

const postsData = [
  {
    title: "ServiceNow Certified System Administrator",
    image: "https://via.placeholder.com/250x150?text=CSA+Certificate",
    description:
      "I'm excited to share that I got certified as a ServiceNow Certified System Administrator!",
    date: "3 weeks ago",
    likes: 24,
    comments: 4,
  },
  {
    title: "Goldman Sachs Forage Program",
    image: "https://via.placeholder.com/250x150?text=Forage+Certificate",
    description:
      "I just completed Goldman Sachs's Software Engineering Simulation on Forage.",
    date: "4 months ago",
    likes: 16,
    comments: 2,
  },
];

export default function Activity() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => setTab(newValue);

  return (
    <Box my={4}>
      <Typography variant="h6">Activity</Typography>
      <Typography variant="body2" color="text.secondary">
        261 followers
      </Typography>

      <Tabs value={tab} onChange={handleChange} sx={{ mt: 2 }}>
        <Tab label="Posts" />
        <Tab label="Comments" />
        <Tab label="Documents" />
      </Tabs>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        {tab === 0 &&
          postsData.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Sowmya Reddy Vangooru • {post.date}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {post.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="150"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="caption">👍 {post.likes} • 💬 {post.comments}</Typography>
                  <Button size="small">View</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

        {tab === 1 && (
          <Typography sx={{ p: 2 }} color="text.secondary">
            No comments to display.
          </Typography>
        )}

        {tab === 2 && (
          <Typography sx={{ p: 2 }} color="text.secondary">
            No documents uploaded yet.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
