import './index.css';
import React, { useState, useEffect } from 'react';





const AboutMe = () => {

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
    <div className="about">
      <h2>About Me</h2>
      <p>Hello! I'm Jason Blankenberg, a passionate developer with experience in web and mobile applications...</p>
      <div className="sized">
        <img src="/profilePhoto.jpeg" alt="Back to Top" />
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

export default AboutMe;