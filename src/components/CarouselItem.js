import React from "react";

function CarouselItem({ image, name, desc, active }) {
  return (
    <div className={`hidden duration-700 ease-in-out ${active ? "block" : ""}`} data-carousel-item={active ? "active" : ""}>
      <div className="projectImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1 className="projectName text-center py-2 ">{name}</h1>
      <p className="projectDesc flex text-center px-2">{desc}</p>
    </div>
  );
}

export default CarouselItem;
