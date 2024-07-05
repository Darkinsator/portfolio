import React, { useEffect, useState } from 'react';
import './index.css';

const FlipCard = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(true);
    }, []);

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="/Back Card.png" alt="Card Back" />
                </div>
                <div className="flip-card-back">
                    <h2>{skill}</h2>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;