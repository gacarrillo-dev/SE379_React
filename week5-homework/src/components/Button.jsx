import React from 'react';

const Button = ({ color, onClick, children }) => {
    const style = {
        backgroundColor: color || 'gray', // Default button color
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
