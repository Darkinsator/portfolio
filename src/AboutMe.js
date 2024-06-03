import React from 'react';
import './index.css';


const AboutMe = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>Hello! I'm Jason Blankenberg, a passionate developer with experience in web and mobile applications...</p>
      <div className="sized">
                    <img src="/profilePhoto.jpeg" alt="Back to Top"/>
                </div>
      
      {/* Add more about me content here */}
      <div className="icons">
                <p align="center">
                  <a href="https://skillicons.dev">

                    <p>Known programming Languages</p>
                    <img src="https://skillicons.dev/icons?i=cs,css,html,java,js,kotlin,nodejs,php,py,react,ts,mysql" 
                         alt="Programming languages: C#, CSS, HTML, Java, JavaScript, Kotlin, Node.js, PHP, Python, React, TypeScript, MySQL"
                         
                    />

                    <p>Known IDE's, packages and version control software</p>
                    <img src="https://skillicons.dev/icons?i=github,git,azure,bootstrap,dotnet,firebase,godot,mongodb,netlify,vscode" 
                         alt="Tools: GitHub, Git, Azure, Bootstrap, .NET, Firebase, Godot, MongoDB, Netlify, VS Code" 
                         
                         
                    />
                  </a>
                </p>
      </div>
    </div>
  );
};

export default AboutMe;