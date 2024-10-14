import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // This will include the glitch effect CSS

const Navbar = () => {
  const [showGif, setShowGif] = useState(false);

  const handleGifClick = () => {
    setShowGif(true);
    setTimeout(() => {
      setShowGif(false);
    }, 3000); // Hide the GIF after 3 seconds
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="navbarheader" data-text="JASON BLANKENBERG">JASON BLANKENBERG</h1>
        <div className="links">
          <Link className="goldman" to="/">Home</Link>
          <Link className="goldman" to="/about">About Me</Link>
          <Link className="goldman" to="/projects">Projects</Link>
          <Link className="goldman" to="/contact">Contact Me</Link> 
          <Link className="goldman" to="/skills">Skills</Link>
        </div>
      </nav>
      {showGif && (
        <div className="gif-overlay" onClick={() => setShowGif(false)}>
          <img className="gif-image" src={`${process.env.PUBLIC_URL}/throwingflashbeng.gif`} alt="Throwing Flashbang" />
        </div>
      )}
    </>
  );
};

export default Navbar;
