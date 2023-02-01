import { Typography } from "@mui/material";
import React from "react";
import { experiencesList } from "./ExperiencesData";

const Experiences = () => {
  return (
    <div className={"flex justify-center gap-16 mt-16 mb-16 text-purple-400"}>
      {experiencesList.map((experience) => (
        <div className="flex flex-col items-center">
          <div
            onClick={() => {
              window.open(experience.website, "_blank");
            }}
            className="rounded-full overflow-hidden
             w-fit h-fit
             hover:cursor-pointer
             hover:m-[-2px]
             hover:border-[6px]
             transition-all duration-100
           border-violet-400 border-4"
          >
            <img className={"w-[170px] h-[170px]"} src={experience.img} />
          </div>
          <div className="w-[300px] mt-8 text-center">
            <Typography variant="subtitle2">
              {experience.description} - {experience.date}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;