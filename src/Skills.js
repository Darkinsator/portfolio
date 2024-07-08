import React from 'react';
import FlipCard from './FlipCard';
import './index.css';

const Skills = () => {
    const skills = ["JavaScript", "React", "CSS", "HTML", "Node.js", "Csharp" ];

    return (
        <div className="skills-container">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <FlipCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;