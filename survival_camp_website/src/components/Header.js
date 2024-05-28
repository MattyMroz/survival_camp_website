import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="nav container top-bottom">
                <div className="nav__logo">
                    <a href="#home" className="navlink text__filter">
                        <span className="blast">S</span><span className="blast">u</span><span className="blast">r</span><span className="blast">w</span><span className="blast">i</span><span className="blast">w</span><span className="blast">a</span><span className="blast">l</span>
                        <span className="blast">C</span><span className="blast">a</span><span className="blast">m</span><span className="blast">p</span>
                    </a>
                </div>
                <nav className="navbar">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link navlink text__filter">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#novel" className="nav__link navlink text__filter">Novel</a>
                        </li>
                        <li className="nav__item">
                            <a href="#audiobook" className="nav__link navlink text__filter">Audiobook</a>
                        </li>
                        <li className="nav__item">
                            <a href="#webtoon" className="nav__link navlink text__filter">Webtoon</a>
                        </li>
                        <li className="nav__item">
                            <a href="#amv" className="nav__link navlink text__filter">AMV</a>
                        </li>
                        <li className="nav__item">
                            <a href="#anime" className="nav__link navlink text__filter">Anime</a>
                        </li>
                    </ul>
                </nav>
                <button className="burger text__filter">
                    <svg id="burger-svg">
                        <rect className="burger-svg__base" />
                        <title>Menu</title>
                        <g className="burger-svg__bars">
                            <rect className="burger-svg__bar-1" rx="3" x="5" y="11" width="40" height="4" />
                            <rect className="burger-svg__bar-2" rx="3" x="5" y="23" width="40" height="4" />
                            <rect className="burger-svg__bar-3" rx="3" x="5" y="35" width="40" height="4" />
                        </g>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;