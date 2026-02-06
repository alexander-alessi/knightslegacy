/**
 * ==============================================================================
 * Knights Legacy Fund Website (Vite/React SPA)
 * ==============================================================================
 *
 * This file is the main entry point for the React application.
 * It mounts the primary App component to the DOM.
 *
 * Authors: Alexander Alessi & Nicolas Alessi
 * Copyright (c) 2026 Knights Legacy Fund. All rights reserved.
 *
 * NOTE: Imports global CSS (including Tailwind directives).
 */

import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
