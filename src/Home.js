// Home.js

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import HexagonGrid from './HexagonGrid';
import './index.css'; // Make sure this includes styles for your content
import GlowingButton from './GlowingButton';


const Home = () => {

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
                <div className="type-animation-container">
                    <TypeAnimation
                        sequence={[
                            'I am a Web Developer',
                            2000,
                            'I am an Application Developer',
                            2000,
                            'I am a Full Stack Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'block', marginTop: '20px', color: '#db1414' }}
                        repeat={Infinity}
                    />
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
