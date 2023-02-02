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
      <div className="flex flex-wrap justify-center text-justify">
        <div className="mt-16 mr-8 flex-1">
          <Typography
            className={"text-purple-300"}
            sx={titleStyles}
            variant="h2"
          >
            Francisco Borba 👨‍💻
          </Typography>
          <Typography className=" text-left text-purple-400" variant="h6">
            Sou um desenvolvedor apaixonado por tecnologia e programação, com
            foco no desenvolvimento web frontend. Iniciei minha jornada em 2021
            como trainee na Suitable e posteriormente me tornei programador
            frontend. Meus estudos começaram na UNISC, onde completei o primeiro
            semestre em Ciência da Computação. Atualmente, continuo buscando
            mais conhecimento em Porto Alegre, onde estou no terceiro semestre
            do curso de Ciência da Computação na PUCRS.
          </Typography>
        </div>
        <Lottie
          style={{ margin: 0, flex: 1 }}
          options={defaultOptions}
          height={"auto"}
          width={"auto"}
        />
      </div>
    </>
  );
};

export default HeaderTitle;
