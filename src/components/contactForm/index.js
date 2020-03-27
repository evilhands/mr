import React from "react"
import "./contactForm.css"

const ContactForm = () => (
  <div className="container contactForm">
    <form name="contact" method="POST" data-netlify="true" action='/thanks' netlify-honeypot='bot'>
      <input type='hidden' name='from-name' value='contact' />
      <div className='hidden'>
        <label>Don't fill this out, humman</label>
        <input name='bot' />
      </div>
      <div>
        <label for="name">Name: </label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label for="message">Message: </label>
        <textarea name="message"></textarea>
      </div>
      <div className='submit'>
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
)

export default ContactForm
