import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BarcodeScanner } from './pages/scanner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
