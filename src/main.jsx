import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

 // Correct path to AppRouter
 import App from './App'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
  <App/> {/* Remove BrowserRouter from here, it's already in AppRouter */}
  </StrictMode>
);
