import { Paper, Typography } from "@mui/material";
import Lottie from "react-lottie";
import React from "react";
import animationData from "../../../animations/animation.json";

const HeaderTitle = () => {
  const titleStyles = {
    marginBottom: "24px",
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
      <div className="flex justify-center text-justify">
        <div className="mt-16 mr-8">
          <Typography
            className={"text-purple-300"}
            sx={titleStyles}
            variant="h2"
          >
            Francisco Borba
          </Typography>
          <Typography className="w-96 text-purple-400" variant="h6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            eveniet quidem ex voluptatem in laudantium facere perspiciatis
            repudiandae ad omnis amet architecto dicta, quam debitis autem
            voluptas. Rerum, soluta nisi!
          </Typography>
        </div>
        <Lottie
          style={{ margin: 0 }}
          options={defaultOptions}
          height={400}
          width={325}
        />
      </div>
    </>
  );
};

export default HeaderTitle;
