import React from 'react'
import BC from "../assets/bc-logo.png"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className = "contact">
      <div className = "left" style = {{backgroundImage: 'url(${BC})'}}>

      </div>
      <div className = "right">
        <h1>Contact Us</h1>
        <form id = "contact-form" method = "POST">
            <label htmlFor = "name"> Full Name</label>
            <input name = "name" placeholder = "Enter full name" type = "text" required/>
            <label htmlFor = "email"> Email</label>
            <input name = "email" placeholder = "Enter email" type = "text" required/>
            <label htmlFor = "message"> Message</label>
            <textarea rows = "6" placeholder = "Enter message" name = "message" required> </textarea>
            <button type = "submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
