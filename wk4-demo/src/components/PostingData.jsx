import React, { useState } from 'react';
import usePost from '../hooks/usePost';

const PostingData = () => {
    const { data, loading, postData } = usePost();
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('posts', formData);
        setShowForm(false);
    };

    const handleGoBack = () => {
        setShowForm(true);
        setFormData({ title: '', body: '' }); // Reset form
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    <label>Body:</label>
                    <input type="text" name="body" value={formData.body} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <h1>Posted Data</h1>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                    <button onClick={handleGoBack}>Go Back</button>
                </div>
            )}
        </div>
    );
};

export default PostingData;
