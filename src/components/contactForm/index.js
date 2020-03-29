import React from "react"
import "./contactForm.css"

const ContactForm = () => (

      <div className="container contactFormContainer">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thanks"
          netlify-honeypot="bot"
        >
          <input type="hidden" name="from-name" value="contact" />
          <div className="hidden">
            <label htmlFor="bot">Don't fill this out, humman</label>
            <input name="bot" />
          </div>
          <div>
            <label htmlFor="reason">An</label>
            <select id="reason" >
              <option value="vorstand">Vorstand</option>
              <option value="booking">Booking</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="submit">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
)

export default ContactForm

  // changeRequest(){
  //   console.log("event");
  // };


