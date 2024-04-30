import React from 'react';

const Box = ({ size, children, style }) => {
    const sizes = {
        s: '100px',
        m: '150px',
        l: '200px',
        small: '100px',
        medium: '150px',
        large: '200px',
        sm: '100px',
        md: '150px',
        lg: '200px'
    };
    const dimension = sizes[size] || sizes.m; // default to medium if no valid size is provided
    const defaultStyle = {
        width: dimension,
        height: dimension,
        backgroundColor: 'lightblue', // Default background color
        ...style
    };

    return <div style={defaultStyle}>{children}</div>;
};

export default Box;