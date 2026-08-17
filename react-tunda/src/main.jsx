import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ensure these styles are introduced at the ROOT globally
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/utilities.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
