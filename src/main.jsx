import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './pages/App'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import About from './pages/About'
import Photography from './pages/Photography'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="about" element={<About />} />
          <Route path="photography" element={<Photography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
