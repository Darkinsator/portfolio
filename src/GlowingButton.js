import React from 'react';
import './GlowingButton.css'; // You can put the CSS in a separate file

const GlowingButton = ({ handleClick }) => {
  return (
    <button className="glowing-btn" onClick={handleClick}>
      <span className="glowing-txt">C<span className="faulty-letter">L</span>ICK</span>
    </button>
  );
};

export default GlowingButton;
