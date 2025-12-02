import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Note: We removed the '!' after getElementById because that is TypeScript syntax.
// This is now pure JavaScript/React.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)