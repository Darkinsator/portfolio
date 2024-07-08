import React, { useEffect, useState } from 'react';
import './index.css';

const FlipCard = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(true);
    }, []);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src="/Back Card.png" alt="Card Back" />
                </div>
                <div className="flip-card-back">
                    <img src={`/${skill}.jpeg`} alt={`${skill} Card`} />
                </div>
            </div>
        </div>
    );
};

export default FlipCard;