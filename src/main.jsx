import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
 // Correct path to AppRouter
 import App from './App'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Router>
  <App/></Router> {/* Remove BrowserRouter from here, it's already in AppRouter */}
  </StrictMode>
);
