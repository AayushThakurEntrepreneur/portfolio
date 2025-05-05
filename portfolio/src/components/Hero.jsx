import React from "react";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import "../App.css";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <section id="hero" className="hero futuristic">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles-bg"
        options={{
          preset: "links",
          fullScreen: { enable: false },
          background: { color: "#0b0b0b" },
          particles: {
            color: { value: "#00ffff" },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
      />

      {/* Foreground Content */}
      <div className="hero-center">
        <div className="profile-wrapper">
          <img src={profileImage} alt="Aayush Thakur" className="profile-pic" />
        </div>
        <h1 className="glow">Aayush Thakur</h1>
        <p className="subtext">Automation Engineer • Data Specialist • AI Explorer</p>

        <div className="badges">
          {['Developer', 'Data Engineer', 'AI Explorer', 'Test Automation Pro', 'GPT Integrator'].map((label, index) => (
            <span className="badge" key={index}>{label}</span>
          ))}
        </div>

        <div className="metrics">
          <div className="tile">3+ Years Experience</div>
          <div className="tile">2 Major Projects</div>
          <div className="tile">1 Research Work Published</div>
          <div className="tile">1000+ Test Cases Automated</div>
          <div className="tile">Worked with more than Million datas (ETL)</div>
          <div className="tile">AI Enthusiast</div>
        </div>

        <div className="cta-buttons">
          <a className="glow-btn" href="mailto:thakur62@uwindsor.ca">Let's Connect</a>
          <a className="glow-btn" href="/Aayush_Resume.pdf" target="_blank">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
