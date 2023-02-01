import React from "react";

interface ProjectCardProps {
  img: string | undefined;
  title: string;
  description: string;
}
const ProjectCard = ({ img, title, description }: ProjectCardProps) => {
  return (
    <div className="p-3 border-2 border-violet-400 h-fit max-w-xs rounded-xl">
      <div className="flex flex-col">
        <img className=" my-4 rounded-3xl self-center h-32 w-32" src={img} />
        <h1 className="text-2xl whitespace-nowrap text-center text-purple-400">
          {title}
        </h1>
        <p className="text-purple-500 text-lg text-center mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
