import React from 'react';

function ProjectItem({ image, name, desc }) {
  return (
    <div className="portfolioItem">
      <div className="projectImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectItem;
