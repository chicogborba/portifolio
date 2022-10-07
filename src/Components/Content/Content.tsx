import { Paper, Typography } from "@mui/material";
import Lottie from "react-lottie";
import React from "react";
import animationData from "../../animations/animation.json";

const Content = () => {
  const paperStyles = {
    backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Paper
        sx={paperStyles}
        className={"h-screen w-screen flex justify-center"}
      >
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Typography>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Paper>
    </>
  );
};

export default Content;
