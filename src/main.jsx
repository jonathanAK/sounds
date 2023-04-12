import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {loadSettings} from "./services/localHost.js";

loadSettings();

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)
