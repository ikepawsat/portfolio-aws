import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://github.com/ikepawsat" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/john-pawsat-a9748627a/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <p>Powered by AWS Amplify</p>
      </div>
    </div>
  )
}

export default Footer
