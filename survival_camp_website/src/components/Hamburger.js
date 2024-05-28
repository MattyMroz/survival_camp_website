import React, { useState } from 'react';
import './Hamburger.css';

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        document.body.classList.toggle('no__scroll', !isActive);
    };

    return (
        <button
            data-aos="fade-down-left"
            data-aos-duration="1000"
            className={`burger text__filter ${isActive ? 'active' : ''}`}
            onClick={toggleMenu}
        >
            <svg id="burger-svg">
                <rect className="burger-svg__base" />
                <title>Menu</title>
                <g className={`burger-svg__bars ${isActive ? 'active' : ''}`}>
                    <rect className="burger-svg__bar-1" rx="3" x="5" y="11" width="40" height="4" />
                    <rect className="burger-svg__bar-2" rx="3" x="5" y="23" width="40" height="4" />
                    <rect className="burger-svg__bar-3" rx="3" x="5" y="35" width="40" height="4" />
                </g>
            </svg>

        </button>
    );
};

export default Hamburger;