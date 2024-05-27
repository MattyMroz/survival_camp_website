import React from 'react';
import './Input.css';

const Input = ({ placeholder, type = 'text', onChange }) => {
    return (
        <div className="input__area">
            <input
                type={type}
                className="input"
                placeholder={placeholder}
                onChange={onChange}
            />
            <div className="input__bg"></div>
        </div>
    );
};

export default Input;