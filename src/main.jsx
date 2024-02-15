import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {loadSettings} from "./services/localHost.js";
import { registerSW } from "virtual:pwa-register";
loadSettings();

// add this to prompt for a refresh
const updateSW = registerSW({
    onNeedRefresh(){
        if (confirm("New content available. Reload?")) {
            updateSW(true);
        }
    },
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)
