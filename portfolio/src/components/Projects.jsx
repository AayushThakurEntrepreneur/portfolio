import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const projects = [
  {
    title: "SmartSpend",
    description: "A full-stack personal finance tracker with AI chatbot.",
    github: "https://github.com/AayushThakurEntrepreneur/smartspend-frontend",
    live: "https://smartspend-pi.vercel.app/login",
  },
  {
    title: "CareerAdvisor AI",
    description: "MBTI-based AI career recommendation system with GPT integration.",
    github: "https://github.com/AayushThakurEntrepreneur",
    live: "https://github.com/AayushThakurEntrepreneur",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;