import React, { useState } from 'react';
import me from "../assets/me.jpeg";
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
      <div className="left" id={openLinks ? "open" : "close"}>
        <img src={me} alt="Logo" />
        <p className="name">Ike Pawsat</p>
        <div className="hiddenLinks hover:bg-gray-700">
          <Link to="/"> <HomeIcon fontSize="small" /> Home </Link>
          <Link to="/About"> <PersonIcon fontSize="small" /> About </Link>
          <Link to="/Portfolio"> <LibraryBooksIcon fontSize="small" /> Portfolio </Link>
          <Link to="/Contact"> <ContactPageIcon fontSize="small" /> Contact </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/"> <HomeIcon fontSize="small" /> Home </Link>
        <Link to="/About"> <PersonIcon fontSize="small" /> About </Link>
        <Link to="/Portfolio"> <LibraryBooksIcon fontSize="small" /> Portfolio </Link>
        <Link to="/Contact"> <ContactPageIcon fontSize="small" /> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
