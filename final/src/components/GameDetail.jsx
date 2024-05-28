import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';  // Ensure this path matches your actual file structure

const GameDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { data: game, loading, error } = useFetch(`http://localhost:3001/games/${productId}`);

    if (loading) return <div className="text-center text-white">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div className="p-4">
            <button className="mb-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300" onClick={() => navigate(-1)}>Go Back</button>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img className="m-5 object-cover" src={game.image} alt={game.title} />
                <div className="p-4">
                    <h1 className="text-2xl font-bold dark:text-white">{game.title}</h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{game.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Category: {game.category}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">ID: {game.id}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-lg text-black dark:text-white font-semibold">Price: ${game.price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Rating: {game.rating.rate} ({game.rating.count} reviews)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetail;
