import FlipCard from './FlipCard';
import './index.css';
import React, { useState, useEffect } from 'react';




const Skills = () => {
    const skills = ["JavaScript", "React", "CSS", "HTML", "Node.js", "Csharp"];

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main>
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <FlipCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
            <footer>
                <p>© 2024 My Portfolio</p>
            </footer>
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <img src="/linkarrow.png" alt="Back to Top" />
                </button>
            )}

        </main>
    );
};

export default Skills;