import { useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const usePost = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const postData = async (url, postData) => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseURL}${url}`, postData);
            setData(response.data);
        } catch (error) {
            console.error('An error occurred:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, postData };
};

export default usePost;
