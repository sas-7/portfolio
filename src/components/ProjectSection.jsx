import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "PathPulse",
    image: "/images/project/1.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "File Compressor",
    image: "/images/project/2.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "cChat",
    image: "/images/project/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
