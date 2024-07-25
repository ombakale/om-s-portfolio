import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Google stock price prediction"
          
          description="Google stock prediction for my portfolio: Analyze historical performance and forecast future trends for informed investment decisions."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Object detection using tensorflow"
          description="Object detection using TensorFlow: Explore model training techniques and performance evaluation for accurate object recognition in images and videos."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Portfolio using node and next .js"
          description="Portfolio creation with Next.js and Node.js: Discuss best practices and optimization strategies for developing robust, full-stack web applications."
        />
      </div>
    </div>
  );
};

export default Projects;
