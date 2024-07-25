import React from 'react'
import Carousel from '../components/Carousel'

function About() {
  return (
    <div>

      <div className = "font-ariel justify-center mx-auto">
      <h1 className = "text-center text-6xl p-8">Skills</h1>
        
        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">Spanish</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "70%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Business Proficiency</p>
              </div>
            </div>
          </div>
        </div>

        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">Python</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "90%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Advanced</p>
              </div>
            </div>
          </div>
        </div>

        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">Java</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "60%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Proficient</p>
              </div>
            </div>
          </div>
        </div>

        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">Website Development Languages -- HTML, CSS, JSON</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "85%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Professional</p>
              </div>
            </div>
          </div>
        </div>

        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">SQL</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "60%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Proficient</p>
              </div>
            </div>
          </div>
        </div>

        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">C#</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "60%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Proficient</p>
              </div>
            </div>
          </div>
        </div>

        <div className = "w-1/2 hover:w-3/4 mx-auto transition-all duration-300 ease-in-out">
          <p className = "font-bold">AWS</p>
          <div className = "pt-4 pb-8 flex justify-center">
            <div class = "relative h-4 rounded-full overflow-hidden bg-gray-300 w-full">
              <div class = "absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700" style={{ width: "70%" }}></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                <p>Proficient</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className = "py-8"></div>

      <h1 className = "text-center text-6xl p-8">Interests</h1>

      <Carousel />

      <div className = "py-8"></div>
    </div>
  )
}

export default About
