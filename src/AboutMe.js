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
      <div className="small">
                    
                    <img style= {{height: "100px", width: "100px"}} src="/csharp.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "130px"}} src="/CSS3.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/html.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/JavaScript.jpg" alt="C#"/>                 
                    <img style= {{height: "100px", width: "100px"}} src="/node.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/python.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/react.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/mysql.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/Kotlin.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "100px"}} src="/java.jpg" alt="C#"/>
                    <img style= {{height: "100px", width: "60px"}} src="/php.jpg" alt="C#"/>

                </div>

    </div>
  );
};

export default AboutMe;