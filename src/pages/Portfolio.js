import React from 'react'
import { ProjectList } from "../helpers/ProjectList"
import ProjectItem from "../components/ProjectItem"
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="portfolioTitle"> Projects</h1>
      <div className="portfolioList">
        {ProjectList.map((projectItem, key) => {
          return (<ProjectItem key={key} image={projectItem.image} name={projectItem.name} desc={projectItem.desc} /> )
        })}
      </div>
      <h1 className = "portfolioTitle"> Skills</h1>
    </div>
  )
}

export default Portfolio
