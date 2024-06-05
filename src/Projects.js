import React from 'react';
//import { TypeAnimation } from 'react-type-animation';
import './index.css';

const Projects = () => {
    
    return (
        <div className="projects">
        <h2>My Projects</h2>
        <header className="App-header">
            
            
        </header>
        <main>
            <section className="projects">
                
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
        
    </div>
    );
};


    export default Projects;