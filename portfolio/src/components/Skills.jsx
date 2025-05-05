import React from "react";
import "../App.css";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Advanced" },
  { name: "MongoDB", icon: <FaDatabase />, level: "Intermediate" },
  { name: "Python", icon: <FaPython />, level: "Intermediate" },
  { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;