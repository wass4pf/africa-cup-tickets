import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
// Set app name
document.title = "AFCON Tickets";

// Set favicon dynamically using existing root logo
const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
favicon.type = 'image/png';
favicon.rel = 'icon';
favicon.href = '/logo.jpg'; // Vite serves files from root if imported or referenced directly
document.head.appendChild(favicon);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
