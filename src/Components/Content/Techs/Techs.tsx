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
  const [selectedID, setSelectedID] = React.useState(0);
  const handelClick = useCallback((id: number) => {
    setSelectedID((prev) => (prev === id ? 0 : id));
  }, []);

  const techsList: Tech[] = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="flex justify-center">
      <div className="flex-col justify-center text-center mt-8 ml-8 mr-8 w-1/2">
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
    </div>
  );
};

export default memo(Techs);
