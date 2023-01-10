import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App   from './App';
import './App.css';

// Firebase configuration


const root = ReactDOM.createRoot(document.getElementById('App'));

root.render(
    <Router>
        <App/>
    </Router>
)