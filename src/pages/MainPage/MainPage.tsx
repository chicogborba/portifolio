import { Paper } from "@mui/material";
import React from "react";
import Content from "../../Components/Content/Content";
import SideBar from "../../Components/SideBar/SideBar";

const MainPage = () => {
  return (
    <div className="flex justify-center">
      <SideBar />
      <Content />
    </div>
  );
};

export default MainPage;
