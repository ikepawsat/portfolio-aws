//Thanks https://tailwindflex.com/@ava-brown/skill-showcase-section-for-resume-porfolio-website
//Used for skills section, exactly what I wanted!

import React, { useState } from 'react';
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import Modal from "../components/Modal";
import "../styles/Portfolio.css";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div class = "bg-white">
      <div className="portfolio">
        <h1 className="portfolioTitle">Projects</h1>
        <div className="portfolioList">
          {ProjectList.map((projectItem, key) => (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              desc={projectItem.desc}
              onClick={() => handleProjectClick(projectItem)}
            />
          ))}
        </div>

        {showModal && selectedProject && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            title={selectedProject.name}
            description={selectedProject.desc}
            image={selectedProject.image}
            longDesc={selectedProject.long_desc}
            githubLink={selectedProject.github}
          />
        )}
      </div>

      <div className = "py-8"></div>

      <div className = "font-ariel w-1/2 justify-center mx-auto">
      <h1 className = "text-center text-6xl p-8">Skills</h1>
        
        <p className = "font-bold">Skills go here</p>
        <div className = "pt-4 pb-8 flex justify-center">
          <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
            <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "50%" }}></div>
          </div>
        </div>

        <p className = "font-bold">Skills go here</p>
        <div className = "pt-4 pb-8 flex justify-center">
          <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
            <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "50%" }}></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
