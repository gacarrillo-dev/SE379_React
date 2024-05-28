import { useState } from 'react';
import axios from 'axios';

const useApi = (baseUrl) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const postData = async (endpoint, payload) => {
        try {
            setLoading(true);
            const response = await axios.post(`${baseUrl}${endpoint}`, payload);
            setData(response.data);
            setLoading(false);
            return response.data;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    const putData = async (endpoint, payload) => {
        try {
            setLoading(true);
            const response = await axios.put(`${baseUrl}${endpoint}`, payload);
            setData(response.data);
            setLoading(false);
            return response.data;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    return { data, error, loading, postData, putData };
};

export default useApi;
