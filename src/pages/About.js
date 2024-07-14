import React from 'react';
import me from "../assets/me.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about-top">
      <div className="about-left">
        <h2>Boston College Junior</h2>
          <p>
            Computer Science B.S. with Data Science Minor
            with focus in Machine Learning and AI
          </p>
        <b>Professor Claire Frechette</b>
            <h6>Boston College Math Department - frechecl@bc.edu</h6>
              <p class = "w3-padding-16">
                  "Ike is motivated and resourceful, and his work in my class was excellent. Our course was an upper level mathematics
                  foundations class meant for junior and senior math majors, and already as a sophomore he was one of my strongest students,
                  both in skill and in character."
              </p>

        <h3>Currently Working for iCode at North Dallas</h3>
        <p>
          talk about IT stuff like licensing, account management, and WiFi setups, also mention that you do teach
        </p>

        <h3>Job Search Goals</h3>
        <p>
          I am a student attempting to get real workplace experience in the summer of 2025 through a hands-on internship.
          Please look around, especially in the about and my portfolio sections, to see if I could fit your team. I would recommend starting with my AI Tag game.
        </p>
      </div>

      <div className="about-right">
        <div className="about-me">
          <img src={me} alt="me" />
        </div>
        <h3>Please visit the Contact page to get in touch</h3>
      </div>
      <div class="w3-third w3-center">
        <div class = "me">
          <a href="resume.pdf" download="resume.pdf" target="_blank"><img src="resume.png" alt="Download Resume"/></a>
        </div>
        <h3>Resume</h3>
          <p>Click to download</p>
      </div>

      <div class="w3-third w3-center">
        <div class = "me">
            </div>
            <h3>Resume</h3>
            <p>Click to download</p>
        </div>
    </div>
  );
}

export default About;
