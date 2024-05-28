import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import GameForm from './GameForm';  // This will be a new component for handling game forms

const GameList = () => {
    const { data: products, loading, error } = useFetch('http://localhost:3001/games');
    const [showForm, setShowForm] = useState(false);
    const [currentGame, setCurrentGame] = useState(null);

    const handleAddGame = () => {
        setCurrentGame(null); // Ensure no data is passed for a new game
        setShowForm(true);
    };

    const handleEditGame = (game) => {
        setCurrentGame(game); // Pass the current game data to the form
        setShowForm(true);
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div className="p-4 dark:bg-gray-900">
            <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddGame}>
                Add New Game
            </button>

            {showForm && <GameForm game={currentGame} setShowForm={setShowForm} />}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="dark:bg-white bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <Link to={`/games/${product.id}`}>
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-white dark:text-black">{product.title}</h4>
                                <p className="dark:text-gray-700 text-gray-300 text-sm">{product.description}</p>
                            </div>
                        </Link>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded m-4" onClick={() => handleEditGame(product)}>
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameList;
