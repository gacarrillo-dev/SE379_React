import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';

const GameForm = ({ game, setShowForm }) => {
    const { postData, putData } = useApi('http://localhost:3001/');
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    useEffect(() => {
        if (game) {
            setFormData(game); // Pre-populate form if editing a game
        }
    }, [game]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Check if the input field is 'price' and convert it to a float if it is.
        const isPrice = name === "price";
        setFormData({
            ...formData,
            [name]: isPrice ? parseFloat(value) || 0 : value  // Convert to float, default to 0 if NaN
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate price to ensure it's a number
        if (isNaN(formData.price)) {
            alert("Please enter a valid price.");
            return;
        }
            try {
            if (game) {
                await putData(`games/${game.id}`, formData); // Edit existing game
            } else {
                await postData('games', formData); // Add new game
            }
            setShowForm(false);
        } catch (error) {
            console.error('Error saving the game:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg text-center font-bold">{game ? 'Edit Game' : 'Add New Game'}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
                    <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded" />
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded"></textarea>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" />
                    <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" />
                    <div className="text-right">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
                <button onClick={() => setShowForm(false)} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block mx-auto">Cancel</button>
            </div>
        </div>
    );
};

export default GameForm;
