import { Typography } from "@mui/material";
import React, { memo, useCallback, useMemo } from "react";
import TechIcon from "../../TechIcon/TechIcon";
// @ts-ignore
import { ReactComponent as GitIcon } from "./icons/github-icon.svg";
// @ts-ignore
import { ReactComponent as MUIIcon } from "./icons/material-ui-icons.svg";
// @ts-ignore
import { ReactComponent as JSIcon } from "./icons/js-icon.svg";
// @ts-ignore
import { ReactComponent as ReactIcon } from "./icons/react-icon.svg";

export type Tech = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const Techs = () => {
  const [selectedID, setSelectedID] = React.useState(1);
  const handelClick = useCallback((id: number) => {
    setSelectedID(id);
  }, []);

  const techsList: Tech[] = [
    {
      id: 1,
      name: "React",
      icon: <ReactIcon />,
    },
    {
      id: 2,
      name: "JavaScript",
      icon: <JSIcon />,
    },
    {
      id: 3,
      name: "MUI",
      icon: <MUIIcon />,
    },
    {
      id: 4,
      name: "Git",
      icon: <GitIcon />,
    },
    {
      id: 5,
      name: "React",
      icon: <ReactIcon />,
    },
    {
      id: 6,
      name: "JavaScript",
      icon: <JSIcon />,
    },
    {
      id: 7,
      name: "MUI",
      icon: <MUIIcon />,
    },
    {
      id: 8,
      name: "Git",
      icon: <GitIcon />,
    },
  ];

  const techsTexts = [
    {
      techId: 1,
      text: "React is a JavaScript library for building user interfaces.",
      icon: <ReactIcon className="w-32 h-32" />,
    },
    {
      techId: 2,
      text: "JavaScript is a programming language that conforms to the ECMAScript specification.",
      icon: <JSIcon className="w-32 h-32" />,
    },
    {
      techId: 3,
      text: "Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.",
      icon: <MUIIcon className="w-32 h-32" />,
    },
    {
      techId: 4,
      text: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      icon: <GitIcon className="w-32 h-32" />,
    },
    {
      techId: 5,
      text: "React is a JavaScript library for building user interfaces.",
      icon: <ReactIcon className="w-32 h-32" />,
    },
    {
      techId: 6,
      text: "JavaScript is a programming language that conforms to the ECMAScript specification.",
      icon: <JSIcon className="w-32 h-32" />,
    },
    {
      techId: 7,
      text: "Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.",
      icon: <MUIIcon className="w-32 h-32" />,
    },
    {
      techId: 8,
      text: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      icon: <GitIcon className="w-32 h-32" />,
    },
  ];

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
        className="mt-8 ml-8 mr-8 w-56 
      flex flex-col justify-center items-center text-center
       fill-purple-400 text-purple-400"
      >
        {techsTexts.find((tech) => tech.techId === selectedID)?.icon}
        <div className="mt-4">
          <Typography variant="caption">
            {techsTexts.find((tech) => tech.techId === selectedID)?.text}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default memo(Techs);
