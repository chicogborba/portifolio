import { Typography } from "@mui/material";
import React from "react";
// @ts-ignore
import pucImg from "./img/puc-img.png";
// @ts-ignore
import SuitableImg from "./img/suitable-img.png";

const Experiences = () => {
  const experiencesList = [
    {
      id: 1,
      img: pucImg,
      description:
        "PUCRS - Desenvolvimento de Software Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eveniet quidem ex voluptatem in laudantium facere perspiciatis repudiandae ad omnis amet architecto dicta",
      date: "2018 - 2022",
      website: "https://www.pucrs.br/",
    },
    {
      id: 2,
      img: SuitableImg,
      description:
        "Suitable - Desenvolvimento de Software Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eveniet quidem ex voluptatem in laudantium facere perspiciatis repudiandae ad omnis amet architecto dicta",
      date: "2021 - 2021",
      website: "https://www.suitable.com.br/",
    },
  ];

  return (
    <div className={"flex justify-center gap-16 mt-16 text-purple-400"}>
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
