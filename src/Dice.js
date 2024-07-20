import React from 'react';
import './Dice.css';

const Dice = ({ value, rolling }) => {
    return (
        <div className={`dice ${rolling ? 'rolling' : ''}`}>
            {value}
        </div>
    );
};

export default Dice;
