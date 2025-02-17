import FlipCard from './FlipCard';
import './index.css';
import React, { useState, useEffect } from 'react';
import HexagonGrid from './HexagonGrid';
import './glitch.css'


const Skills = () => {
    const skills = ["JavaScript", "CSS", "HTML", "Node.js", "Csharp", "React"];

    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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
        <div>

        <HexagonGrid />

            <div className="skills-container">
                <div>
                
                <h1 className="glitch-animation" data-text="MY SKILLS">MY SKILLS</h1>
                </div><br></br>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <FlipCard key={index} skill={skill} />
                    ))}
                </div><br></br>
            </div>
            <footer>
                <p>© 2024 My Portfolio</p>
            </footer>
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <img src="/linkarrow.png" alt="Back to Top" />
                </button>
            )}

        </div>
    );
};

export default Skills;