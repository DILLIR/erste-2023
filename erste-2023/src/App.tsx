import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import Layout from './components/Layout';

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );
}

export default App;
