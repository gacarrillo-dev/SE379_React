import React from 'react';

const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Our Game Hub!</h1>
                <img src="https://assets-prd.ignimgs.com/2022/12/21/top100games-2021-blogroll-1671593544336.jpg?crop=16%3A9&width=888"
                     alt="Top 100 Games"
                     className="rounded-lg shadow-lg mb-4 max-w-full h-auto"
                />
                <p className="text-gray-600 dark:text-gray-300">
                    Explore the top games from around the world.
                </p>
            </div>
        </div>
    );
};

export default Home;
