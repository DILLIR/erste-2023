import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ShopCards } from './pages/ShopCards';
import { BarcodeScanner } from './pages/scanner';
import React from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/scanner',
        element: <BarcodeScanner />,
    },
    {
        path: '/shop-cards',
        element: <ShopCards />,
    },
]);
