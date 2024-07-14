import React from 'react'
import me from "../assets/me.jpeg";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className = "contact">
      <div className = "left">
        <img src={me} alt="Logo" />
      </div>
      <div className = "right">
        <h1>Contact Me</h1>
        <form id = "contact-form" method = "POST">
            <label htmlFor = "name"> Full Name</label>
            <input name = "name" placeholder = "Enter full name" type = "text" required/>
            <label htmlFor = "email"> Email</label>
            <input name = "email" placeholder = "Enter email" type = "text" required/>
            <label htmlFor = "message"> Message</label>
            <textarea name = "message" placeholder = "Enter message" rows = "6" required />
            <button type = "submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
