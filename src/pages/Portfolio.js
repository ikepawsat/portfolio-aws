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
    <div className="portfolio">
      <h1 className="portfolioTitle"> Projects</h1>
      <div className="portfolioList">
        {ProjectList.map((projectItem, key) => {
          return (
            <ProjectItem
              key={key}
              image={projectItem.image}
              name={projectItem.name}
              desc={projectItem.desc}
              onClick={() => handleProjectClick(projectItem)}
            />
          );
        })}
      </div>
      <h1 className="portfolioTitle"> Skills</h1>
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
  );
}

export default Portfolio;
