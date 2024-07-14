import React, {useState} from 'react'
import bcLogo from "../assets/bc-logo.png";
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className = "navbar">
      <div className = "left" id = {openLinks ? "open" : "close"}>
        <img src = {bcLogo} />
        <div className = "hiddenLinks">
            <Link to = "/"> Home </Link>
            <Link to = "/About"> About </Link>
            <Link to = "/Portfolio"> Portfolio </Link>
            <Link to = "/Contact"> Contact </Link>
        </div>
      </div>
      <div className = "right">
        <Link to = "/"> Home </Link>
        <Link to = "/About"> About </Link>
        <Link to = "/Portfolio"> Portfolio </Link>
        <Link to = "/Contact"> Contact </Link>
        <button onClick = {toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
