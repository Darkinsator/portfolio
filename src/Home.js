// Home.js

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import HexagonGrid from './HexagonGrid';
import './index.css'; // Make sure this includes styles for your content
import GlowingButton from './GlowingButton';
import './glitch.css';


const Home = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const phrases = [
      'I am a Web Developer',
      'I am an Application Developer',
      'I am a Full Stack Developer',
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000); // Change text every 2 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [phrases.length]);

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

    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/JASONBLANKENBERGCV.pdf'; // Replace with your PDF path
        link.download = 'JASONBLANKENBERGCV.pdf'; // The name of the file
        link.click();
      };


    return (
       
        <div style={{ position: 'relative' }}>

            <HexagonGrid />
            
            <header className="App-header">
                <h1>My Portfolio</h1>
                <p>Welcome to my portfolio website!</p>
                
                <div className="glitch-container">
                     <h1 className="glitch-animation" data-text={phrases[currentIndex]}>
                       {phrases[currentIndex]}
                     </h1>
                </div>
                <br></br>
            <GlowingButton handleClick={downloadPDF} />   
                  
                            
            </header>
            

            {/* <footer> */}
                {/* <p>© 2024 My Portfolio</p> */}
            {/* </footer> */}
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <img src="/linkarrow.png" alt="Back to Top" />
                </button>
                
            )}
        </div>
       
    );
};

export default Home;
