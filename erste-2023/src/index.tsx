import ReactDOM from 'react-dom/client';
import App from './App';
import { BarcodeScanner } from './pages/scanner';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
        <App />
);
