import React from 'react';
import Box from './Box.jsx';
import Text from './Text.jsx';
import Button from './Button.jsx';

const MyComponent = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <Box size="m">
            <Text size="medium" color="darkblue">Hello, world!</Text>
            <Button color="red" onClick={handleButtonClick}>Click Me!</Button>
        </Box>
    );
};

export default MyComponent;
