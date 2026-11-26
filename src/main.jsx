import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Abri from './Abri.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/abri" element={<Abri />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
