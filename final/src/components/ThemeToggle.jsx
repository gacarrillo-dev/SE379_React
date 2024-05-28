import React from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            className="text-white bg-gray-800 hover:bg-gray-600 px-4 py-2 rounded"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
