import React, { useState } from "react";
import emailjs from "emailjs-com";
import resume from "../assets/resume.png";
import "../styles/Contact.css";
import Modal from "../components/MessageModal.js";

function Contact() {
  const [showModal, setShowModal] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();

    //Using emailJS
    emailjs.sendForm(
      "contact_me_portfolio", //service id
      "contact", //template id
      event.target,
      "eXDkaCa2rymiERbwV" //public key
    )
    .then((result) => {
      console.log(result.text);
      // Show modal on successful form submission
      setShowModal(true);
    }, (error) => {
      console.log(error.text);
    });

    // Reset form fields
    event.target.reset();
  };

  return (
    <div className="contact">
      <div className="left">
        <a href={resume} download>
          <img src={resume} alt="resume" />
        </a>
        <p>Click to Download</p>
        <p>Last updated: July 24th 2024</p>
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Full Name</label>
          <input name="name" placeholder="Enter full name" type="text" required />
          <label htmlFor="email"> Email</label>
          <input name="email" placeholder="Enter email" type="text" required />
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
