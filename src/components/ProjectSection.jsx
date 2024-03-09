import React from "react";
import ProjectCard from "./ProjectCard";
import { project } from "./comp";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProjectSection = () => {
  return (
    <>
      <h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        id="project"
      >
        My Projects
      </h2>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {project.map((project, index) => (
            <VerticalTimelineElement
              key={project.institute}
              date={project.date}
              iconStyle={{ background: project.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={project.icon}
                    alt={project.institute}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: project.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {project.title}
                </h3>
              </div>
              <ProjectCard
                key={project.id}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
              <ul className="my-5 list-disc ml-5 space-y-2">
                {project.points.map((point, index) => (
                  <li
                    key={`project-point-${index}`}
                    className="text-black font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default ProjectSection;
