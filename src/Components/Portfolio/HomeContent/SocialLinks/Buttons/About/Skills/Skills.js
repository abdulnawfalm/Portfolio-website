// src/components/Skills.js
import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = skillsRef.current;
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          element.classList.add("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>HTML 5</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "100%" }}></div>
          </div>
        </div>

        <div className="skill">
          <h3>CSS 3</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="skill">
          <h3>JavaScript</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "30%" }}></div>
          </div>
        </div>

        <div className="skill">
          <h3>React Js</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className="skill">
          <h3>Bootstrap</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>UI UX Designer</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Database MYSQL</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Node Js</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Python</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
