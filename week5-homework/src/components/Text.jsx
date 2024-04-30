import React from 'react';

const Text = ({ size, color, children }) => {
    const fontSize = {
        small: '1rem',
        medium: '1.5rem',
        large: '2rem'
    }[size] || '1rem'; // Default to 1rem if size is not specified

    const style = {
        fontSize: fontSize,
        color: color || 'black' // Default text color is black
    };

    return <p style={style}>{children}</p>;
};

export default Text;