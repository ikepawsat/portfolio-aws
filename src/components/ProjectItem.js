import React from 'react';

function ProjectItem({ image, name, desc, onClick }) {
  return (
    <div className="portfolioItem" onClick={onClick}>
      <div className="projectImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1 className="projectName text-center py-2 ">{name}</h1>
      <p className="projectDesc flex text-center px-2">{desc}</p>
    </div>
  );
}

export default ProjectItem;
