import './index.css';
import HexagonGrid from './HexagonGrid';
import React, { useState, useEffect } from 'react';




const Projects = () => {

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
            <h2>My Projects</h2>
            
            <main>
                <section className="projects">

                    <div className="project">
                        <h3 className="goldman">Paragon Master Builders Website</h3>
                        <p>Created a HTML, CSS, JS website for a construction company.</p>
                        <a href="https://github.com/Darkinsator/ParagonMB">View Project</a>
                    </div>
                    <div className="project">
                        <h3 className="goldman" >Birdinator Mobile Application</h3>
                        <p>Created a bird finder application, in a team of 3 with kotlin.</p>
                        <a href="https://github.com/DeCharter/OPSC_POE_App">View Project</a>
                    </div>
                    <div className="project">
                        <h3 className="goldman">NGO Web application</h3>
                        <p>Created a NGO web application where Customers can make donations, in a team of 2.</p>
                        <a href="https://github.com/Yummy07K/XISDWebApplication">View Project</a>
                    </div>
                    <div className="project">
                        <h3 className="goldman">Public participation platform web application</h3>
                        <p>Created public participation web application at a the first inaugural city of cape town hackathon, in a team of 6.</p>
                        <a href="https://github.com/MogammadShaqeelless16/UVU-AfricaHackathon">View Project</a>
                    </div>
                    <div className="project">
                        <h3 className="goldman">NGO web application and mobile application</h3>
                        <p>Created a web application and mobile application demo for the hidden treasures NGO, in a team of 3.</p>
                        <a href="https://github.com/DeCharter/XISD_MobileApplication">View Project</a>
                    </div>
                    <h3>Want to see more? Head over to my github repository <a href="https://github.com/Darkinsator">here.</a></h3>


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


export default Projects;