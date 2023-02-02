import React from "react";

interface ProjectCardProps {
  img: string | undefined;
  title: string;
  description: string;
}
const ProjectCard = ({ img, title, description }: ProjectCardProps) => {
  return (
    <div
      className="p-3 border-2 border-violet-400 flex-grow-1 max-w-xs rounded-xl
     hover:scale-110 hover:cursor-pointer hover:border-violet-300 transition-all"
    >
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
