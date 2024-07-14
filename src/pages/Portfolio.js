import React from 'react'
import {ProjectList} from "../helpers/ProjectList"
import ProjectItem from "../components/ProjectItem"

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="projectTitle"> Projects</h1>
      <div className="ProjectList">
        {ProjectList.map((projectItem, key) => {
          return <ProjectItem key = {key} image = {projectItem.image} name = {projectItem.name} price = {projectItem.price} />
        })}
      </div>
    </div>
  )
}

export default Portfolio
