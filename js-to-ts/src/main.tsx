import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // .tsx extension is assumed in imports
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsList } from './components/products/ProductsList';
import { ProductDetail } from './components/products/ProductDetail';
import { RouteNotFound } from './components/RouteNotFound';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<div className="flex-centered">This is the home screen</div>} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="products/:productId" element={<ProductDetail />} />
                    <Route path="*" element={<RouteNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
