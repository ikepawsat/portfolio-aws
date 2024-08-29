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
    <div>
      <div className="portfolio">
        <h1 className = "text-center text-6xl p-8 pt-32">Current Employment</h1>
        <div className = "w-1/2 pt-16 font-bold text-wrap text-left mx-auto">
          <h5>
            I am currently working as a Teaching Assistant and Lab Mentor for the Boston College Computer Science Department for Professor Biswas'
            CSCI2271: Computer Organization. This was a class I loved and excelled in last year and helped me develop my own CPU using Verilog.
          </h5>
        </div>
        
        <h1 className="portfolioTitle pt-24">Projects</h1>
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

      <div className = "py-8 portfolio"></div>
    </div>
  );
}

export default Portfolio;
