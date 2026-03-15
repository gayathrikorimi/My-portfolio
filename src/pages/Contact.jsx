import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <p className="contact-intro">
        <p className="contact-intro">
I’m always open to connecting with people who share an interest in technology and web development. 
If you have a project idea, collaboration opportunity, or any questions, feel free to reach out. 
I enjoy learning new things and working on creative solutions. 
Your message is always welcome, and I will do my best to respond as soon as possible. 
Let’s connect and build something great together.
</p>
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;