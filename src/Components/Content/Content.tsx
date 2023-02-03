import { Paper } from "@mui/material";
import React from "react";
import EnhancedDivider from "../EnhancedDivider/EnhancedDivider";
import Experiences from "./Experiences/Experiences";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import Projects from "./Projects/Projects";
import Techs from "./Techs/Techs";

const Content = () => {
  const paperStyles = {
    margin: "24px",
    background: "rgba( 0, 0, 0, 0.6 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 7px )",
    "-webkit-backdrop-filter": "blur( 7px )",
    borderRadius: "16px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    width: "auto",
    marginBotom: "24px",
    height: "auto",
  };

  return (
    <div className="ml-16 mt-6 mb-6 flex-wrap">
      <Paper sx={paperStyles} className={"h-full justify-center p-16"}>
        <HeaderTitle />
        <Techs />
        <Experiences />
        <Projects />
      </Paper>
    </div>
  );
};

export default Content;
