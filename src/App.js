import React, { useState } from "react";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Connections from "./components/Connections";
import Widgets from "./components/Widgets";
import RecentActivity from "./components/RecentActivity";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar"; // ✅ new import
import Suggestions from "./components/Suggestions";
import Analytics from "./components/Analytics";
import Activity from "./components/Activity";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const lightTheme = createTheme({ palette: { mode: "light" } });

return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    <Navbar />
    <Container maxWidth="lg">
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <Profile />
      <Suggestions />
      <Analytics />
      <Activity />
      <Experience />
      <Connections />
      <RecentActivity />
      <Widgets />
    </Container>
  </ThemeProvider>
);

}

export default App;
