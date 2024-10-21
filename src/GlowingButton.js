import React from 'react';
import './GlowingButton.css'; // You can put the CSS in a separate file

const GlowingButton = ({ handleClick }) => {
  return (
    <button className="glowing-btn" onClick={handleClick}>
      <span className="glowing-txt">DOWN<span className="faulty-letter">LOAD</span> CV</span>
    </button>
  );
};

export default GlowingButton;
