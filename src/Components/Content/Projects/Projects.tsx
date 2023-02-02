import React from "react";
//@ts-ignore
import discors_img from "./img/discord_bot_img.jpeg";
//@ts-ignore
import portifolio_icon from "./img/portifolio_icon.jpg";
//@ts-ignore
import fabiane_livros_img from "./img/icone_fabiane_livros.png";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  const projectsList = [
    {
      img: discors_img,
      title: "Discord Bot",
      description: `
        Um robô para o discord feito utilizando a API do discord e
        Python. Possuindo diversas funcionalidades como: música, jogos
        simples, entre outros. O código fonte está disponível no meu
        github. E clicando no botão abaixo você pode acompanhar todo o
        processo de desenvolvimento do projeto.
      `,
    },
    {
      img: fabiane_livros_img,
      title: "Site Pessoal",
      description: `
        Um site pessoal feito utilizando ReactJS e Typescript. 
        O design da página foi feito utilizando Figma e TailwindCSS. É um site feito para uma escritora,
        onde ela pode postar seus livros, textos e fotografias. O projeto é hospetado pela Vercel.
        E clicando no botão abaixo você pode acompanhar todo o processo de desenvolvimento do projeto.
      `,
    },
    {
      img: portifolio_icon,
      title: "Portfolio",
      description: `
        Este site foi feito utilizando ReactJS e Typescript. Todo o seu estilo foi feito utilizando TailwindCSS.
        O projeto é hospetado pela Vercel. Ele apresenta um resumo sobre mim, minhas experiências e projetos. Contendo também informações de contato.
        E clicando no botão abaixo você pode acompanhar todo o processo de desenvolvimento do projeto.
      `,
    },
    {
      img: discors_img,
      title: "Discord Bot",
      description: `
        Um robô para o discord feito utilizando a API do discord e
        Python. Possuindo diversas funcionalidades como: música, jogos
        simples, entre outros. O código fonte está disponível no meu
        github. E clicando no botão abaixo você pode acompanhar todo o
        processo de desenvolvimento do projeto.
      `,
    },
    {
      img: discors_img,
      title: "Discord Bot",
      description: `
        Um robô para o discord feito utilizando a API do discord e
        Python. Possuindo diversas funcionalidades como: música, jogos
        simples, entre outros. O código fonte está disponível no meu
        github. E clicando no botão abaixo você pode acompanhar todo o
        processo de desenvolvimento do projeto.
      `,
    },
    {
      img: discors_img,
      title: "Discord Bot",
      description: `
        Um robô para o discord feito utilizando a API do discord e
        Python. Possuindo diversas funcionalidades como: música, jogos
        simples, entre outros. O código fonte está disponível no meu
        github. E clicando no botão abaixo você pode acompanhar todo o
        processo de desenvolvimento do projeto.
      `,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center gap-16 mt-16 mb-16 text-purple-400">
        <h1 className="text-6xl  text-center text-purple-400">
          💡 Projetos 💡{" "}
        </h1>
        <div className="flex flex-row justify-center gap-12  flex-wrap">
          {projectsList.map((project) => (
            <ProjectCard
              img={project.img}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
