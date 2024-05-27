import React from 'react';
import './Textarea.css';

const Textarea = ({ placeholder, onChange }) => {
    return (
        <div className="textarea__area">
            <textarea
                className="textarea"
                placeholder={placeholder}
                onChange={onChange}
            />
            <div className="textarea__bg"></div>
        </div>
    );
};

export default Textarea;