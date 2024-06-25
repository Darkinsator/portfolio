import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Alumni_Sans" rel="stylesheet" />
      </Helmet>
      <h1 className="sarpanch-font">JASON BLANKENBERG</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/gif-redirect">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link> {/* New link */}

      </div>
    </nav>
  );
};

export default Navbar;