import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { data: product, loading, error } = useFetch(`http://localhost:3000/products/${productId}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="product-detail">
            <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
            <h1>{product.title}</h1>
            <img className="product-detail-image" src={product.image} alt={product.title} />
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetail;
