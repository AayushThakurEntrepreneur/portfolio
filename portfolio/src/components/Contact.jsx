import React from "react";
import "../App.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-icons">
        <a href="mailto:thakur62@uwindsor.ca"><FaEnvelope /></a>
        <a href="https://github.com/AayushThakurEntrepreneur" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/aayush-thakur-canada" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>
    </section>
  );
};

export default Contact;