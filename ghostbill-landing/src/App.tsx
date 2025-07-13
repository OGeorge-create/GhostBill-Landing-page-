import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Security from './pages/Security';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Docs from './pages/Docs';
import Status from './pages/Status';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/security" element={<Security />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;