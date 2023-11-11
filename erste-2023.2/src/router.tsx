import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ShopCards } from './pages/ShopCards';
import TransactionsPage from './pages/TransactionsPage';
import { BarcodeScanner } from './pages/scanner';
import React from 'react';

export const router = createBrowserRouter([
    {
        path: '/build/',
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
    {
        path: '/shop-cards/:cardNumber',
        element: <ShopCards />,
    },
    {
        path: '/transactions',
        element: <TransactionsPage />,
    },
]);
