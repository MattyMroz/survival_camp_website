import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = React.memo(
    React.forwardRef(({ text, onClick, disabled, transparent }, ref) => {
        return (
            <div className="button__area">
                <div className="button__wrapper">
                    <button
                        ref={ref}
                        className={classNames('button', { 'button__disabled': disabled, 'button--transparent': transparent })}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {text}
                    </button>
                    {!transparent && <div className="button__bg"></div>}
                </div>
            </div>
        );
    })
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => { },
    disabled: false,
    transparent: false,
};

export default Button;