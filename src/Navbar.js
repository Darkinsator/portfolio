import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

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
        <h1 className="sarpanch-font">JASON BLANKENBERG</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/gif-redirect">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link> {/* New link */}
        </div>
        <button className="gif-button" onClick={handleGifClick}>
          <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Play GIF" />
        </button>
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