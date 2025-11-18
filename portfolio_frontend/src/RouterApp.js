import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Aboutme from './pages/Aboutme';

/**
 * PUBLIC_INTERFACE
 * RouterApp
 * Application router wrapper that defines routes and a basic navigation
 * to access the About page ("/about") while keeping the existing App
 * content at the root route ("/").
 */
function RouterApp() {
  return (
    <BrowserRouter>
      <nav style={{
        display: 'flex',
        gap: '12px',
        padding: '12px 16px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        background: 'var(--bg-primary, #fff)',
        zIndex: 1000
      }}>
        <Link to="/" aria-label="Home">Home</Link>
        <Link to="/about" aria-label="About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Aboutme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
