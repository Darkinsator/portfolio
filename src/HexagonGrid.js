// HexagonGrid.js

import React from 'react';
import './HexagonGrid.css';

const HexagonGrid = () => {
  const hexagonRows = Array(20).fill(null).map((_, index) => (
    <div className="row" key={index}>
      {Array(16).fill(null).map((_, hexIndex) => (
        <div className="hexagon" key={hexIndex}></div>
      ))}
    </div>
  ));

  return (
    <div className="hexagon-grid">
      {hexagonRows}
      <div className="cursor"></div>
    </div>
  );
};

export default HexagonGrid;
