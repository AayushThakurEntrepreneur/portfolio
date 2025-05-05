import React from "react";
import "../App.css";
import profileImage from "../assets/profile.jpg"; // Make sure this image exists

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={profileImage} alt="Aayush Thakur" className="about-img" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m Aayush Thakur, a Master of Applied Computing student at the University of Windsor with
            3+ years of experience in automation testing, data pipelines, and web development.
            I’ve worked with Coforge where I automated 1000+ test cases and developed ETL solutions for
            high-volume insurance systems.
          </p>
          <p>
            I enjoy solving problems using clean, data-driven engineering. I'm currently exploring roles
            where I can apply my skills in real-world data infrastructure, automation, and scalable web
            solutions. Let's connect and build something impactful together!
          </p>
          <div className="about-links">
            <a href="mailto:thakur62@uwindsor.ca">Email</a>
            <a href="https://linkedin.com/in/aayush-thakur-canada" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/AayushThakurEntrepreneur" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;