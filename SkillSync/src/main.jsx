import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavgationBar from './NavigationBar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavgationBar/>
    <App />
  </StrictMode>,
)
