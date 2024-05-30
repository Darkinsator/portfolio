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
    </div>
  );
};

export default AboutMe;