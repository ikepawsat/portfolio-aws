import React from 'react'
import Carousel from '../components/Carousel'

function About() {
  return (
    <div>

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

      <div className = "py-8"></div>

      <h1 className = "text-center text-6xl p-8">Title</h1>

      <Carousel />

      <div className = "py-8"></div>
    </div>
  )
}

export default About
