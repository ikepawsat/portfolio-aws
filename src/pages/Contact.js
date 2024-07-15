import React, { useState } from 'react';
import resume from "../assets/resume.png";
import resumePDF from "../assets/resumePDF.pdf";
import "../styles/Contact.css";
import Modal from "../components/MessageModal.js";

function Contact() {
  const [showModal, setShowModal] = useState(false); // State to manage modal display

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Add logic here to send email (not implemented here)

    // Show modal on successful form submission
    setShowModal(true);
  };

  return (
    <div className="contact">
      <div className="left">
        <a href={resumePDF} download> <img src={resume} alt="resume" /></a>
        <p>Click to Download</p>
        <p>Last updated: </p>
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Full Name</label>
          <input name="name" placeholder="Enter full name" type="text" required />
          <label htmlFor="email"> Email</label>
          <input name="email" placeholder="Enter email" type="email" required />
          <label htmlFor="message"> Message</label>
          <textarea name="message" placeholder="Enter message" rows="6" required />
          <button type="submit"> Send Message</button>
        </form>
      </div>
      {/* Modal component */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Contact;
