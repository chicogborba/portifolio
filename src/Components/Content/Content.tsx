import { Paper } from "@mui/material";
import React from "react";
import EnhancedDivider from "../EnhancedDivider/EnhancedDivider";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import Techs from "./Techs/Techs";

const Content = () => {
  const paperStyles = {};

  return (
    <div>
      <Paper
        sx={paperStyles}
        className={"h-screen flex-col justify-center p-16"}
      >
        <HeaderTitle />
        <EnhancedDivider />
        <Techs />
      </Paper>
    </div>
  );
};

export default Content;
