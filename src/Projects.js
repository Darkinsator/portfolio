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
        
    </div>
    );
};


    export default Projects;