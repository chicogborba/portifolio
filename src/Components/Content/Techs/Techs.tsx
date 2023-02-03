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

  const selectedTech = useMemo(() => {
    return techsTexts.find((tech) => tech.techId === delayedID);
  }, [delayedID]);

  return (
    <div className="flex justify-center mb-20">
      <div className=" text-purple-300 flex-col justify-center text-center mt-8 ml-8 mr-8 flex-1 max-w-[35%]">
        <Typography className="" variant="h4">
          🚀 Tecnologias 🚀
        </Typography>
        <div className="flex flex-row flex-wrap gap-8 mt-8">
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
          hover:fill-purple-200
          hover:text-purple-200
          hover:cursor-pointer
          hover:scale-105
      flex flex-col scale-100 transition-all justify-center items-center text-center
       fill-purple-400 text-purple-400` + (srink ? " scale-0" : "")
        }
        onClick={() => {
          window.open(selectedTech?.website, "_blank");
        }}
      >
        {selectedTech?.icon}
        <div className="mt-4">
          <Typography className="" variant="caption">
            {selectedTech?.text}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default memo(Techs);
