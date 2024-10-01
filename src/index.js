import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStorage } from './GlobalContext/GlobalContext';
import './index.css';
import App from './App';
ReactDOM.render(
<React.StrictMode>
    <GlobalStorage>
        <App />
    </GlobalStorage>
</React.StrictMode>,
document.getElementById('root')
);