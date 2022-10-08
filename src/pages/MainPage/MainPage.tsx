import { createTheme, Paper, ThemeProvider } from "@mui/material";
import React from "react";
import Content from "../../Components/Content/Content";
import SideBar from "../../Components/SideBar/SideBar";

const MainPage = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  //<SideBar />
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center">
        <SideBar />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
