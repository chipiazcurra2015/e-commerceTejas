import React from 'react';
import { createRoot } from 'react-dom/client';  // Importar createRoot desde "react-dom/client"
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);