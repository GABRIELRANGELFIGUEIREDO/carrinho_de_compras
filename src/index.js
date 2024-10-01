import React from 'react';
import { GlobalStorage } from './GlobalContext/GlobalContext';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <GlobalStorage>
            <App />
        </GlobalStorage>
    </React.StrictMode>
);