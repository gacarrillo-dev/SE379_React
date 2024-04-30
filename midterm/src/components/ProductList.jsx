import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
    const { data: products, loading, error } = useFetch('http://localhost:3000/products');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="product-list">
            {products.map(product => (
                <Link key={product.id} to={`/products/${product.id}`}>
                    <div className="product-item">
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
