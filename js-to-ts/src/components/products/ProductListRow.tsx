import React from 'react';
import { Card } from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

interface Rating {
    rate: number;
    count: number;
}

interface Props {
    product: Product;
}

export const ProductListRow: React.FC<Props> = ({ product }) => {
    return (
        <Card
            style={{
                display: 'flex',
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
            }}
        >
            <Thumbnail description={product.description} image={product.image} />
            <Link to={`/${product.id}`}>
                {product.title}
            </Link>
        </Card>
    );
};
