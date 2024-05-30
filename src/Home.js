import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './index.css';

const Home = () => {
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
        <div className="home">
            <h2>Homepage</h2>
            <header className="App-header">
                <h1>My Portfolio</h1>
                <p>Welcome to my portfolio website!</p>
                <TypeAnimation
                    sequence={[
                        'I am a Web Developer',
                        2000, 
                        'I am an Application Developer',
                        2000,
                        'I am a Full Stack Developer',
                        2000,
                        'I am a YORU GAMER!',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.5em', display: 'block', marginTop: '20px', color: '#db1414' }}
                    repeat={Infinity}
                />
            </header>
            <main>
                <section className="projects">
                    <h2>My Projects</h2>
                    <div className="project">
                        <h3>Paragon Master Builders Website</h3>
                        <p>Created a HTML, CSS, JS website for a construction company.</p>
                        <a href="https://github.com/Darkinsator/ParagonMB">View Project</a>
                    </div>
                    <div className="project">
                        <h3>Birdinator Mobile Application</h3>
                        <p>Created a bird finder application in a team of 3 with kotlin.</p>
                        <a href="https://github.com/DeCharter/OPSC_POE_App">View Project</a>
                    </div>
                    {/* Add more projects here */}
                </section>
            </main>
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

export default Home;
