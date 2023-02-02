import { createTheme, Paper, ThemeProvider } from "@mui/material";
import React from "react";
import Content from "../../Components/Content/Content";
import SideBar from "../../Components/SideBar/SideBar";

const MainPage = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: ["Questrial", "sans-serif"].join(","),
    },
  });

  //<SideBar />
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
      <div className="flex justify-center font-Questrial">
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
