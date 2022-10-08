import { Typography } from "@mui/material";
import React, { memo, useCallback, useEffect, useMemo } from "react";
import TechIcon from "../../TechIcon/TechIcon";
import { techsList, techsTexts } from "./TechsData";

export type Tech = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const Techs = () => {
  const [selectedID, setSelectedID] = React.useState(1);
  const [delayedID, setDelayedID] = React.useState(1);
  const [srink, setSrink] = React.useState(false);
  const handelClick = useCallback((id: number) => {
    setSelectedID(id);
  }, []);

  useEffect(() => {
    setSrink(true);
    setTimeout(() => {
      setSrink(false);
      setDelayedID(selectedID);
    }, 300);
  }, [selectedID]);

  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center text-center mt-8 ml-8 mr-8 w-2/5">
        <Typography variant="h4">Technologies</Typography>
        <div className="flex flex-wrap justify-around gap-4 mt-8">
          {techsList.map((tech) => (
            <TechIcon
              tech={tech}
              handelClick={handelClick}
              isSelected={selectedID === tech.id}
            />
          ))}
        </div>
      </div>
      <div
        className={
          `mt-8 ml-8 mr-8 w-56 
      flex flex-col scale-100 transition-all justify-center items-center text-center
       fill-purple-400 text-purple-400` + (srink ? " scale-0" : "")
        }
      >
        {techsTexts.find((tech) => tech.techId === delayedID)?.icon}
        <div className="mt-4">
          <Typography variant="caption">
            {techsTexts.find((tech) => tech.techId === delayedID)?.text}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default memo(Techs);
