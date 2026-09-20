import React from 'react';
import { useFetchProducts } from '../../hooks/products/useFetchProducts';
import { Spinner } from '../Spinner';
import { ProductListRow } from './ProductListRow';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductsList: React.FC = () => {
  const { data: products, loading, error } = useFetchProducts();

  if (loading) return <Spinner />;

  if (error) {
    return <p>There was an error</p>;
  }

  return (
      <div className="product-container">
        {products && products.length > 0 &&
            products.map((product: Product) => (
                <ProductListRow key={product.id} product={product} />
            ))}
      </div>
  );
};
