import { SettingsEthernet } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { memo, useEffect } from "react";
import { Tech } from "../Content/Techs/Techs";

export interface TechIconProps {
  handelClick: (id: number) => void;
  isSelected: boolean;
  tech: Tech;
}

const TechIcon = ({ handelClick, isSelected, tech }: TechIconProps) => {
  return (
    <div
      onClick={() => handelClick(tech.id)}
      className={
        `flex flex-col w-20 h-20 justify-center
      text-purple-400  p-2
      hover:cursor-pointer
      hover:border-purple-100
      fill-purple-400
      rounded-md
      border-purple-400 border-2
      transition-all duration-200
      items-center` +
        (isSelected ? " border-white bg-purple-500 fill-white text-white" : "")
      }
    >
      {tech.icon}
      <Typography variant="caption">{tech.name}</Typography>
    </div>
  );
};

export default memo(TechIcon);
