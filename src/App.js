import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TrustedBrands from './components/TrustedBrands';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';
import DemoPage from './components/DemoPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Testimonial from './components/Testimonials';

import AddEvent from './components/AddEvent';
import ViewEvents from './components/ViewEvents';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <TrustedBrands />
            <Features />
            <Demo />
            <Testimonial /> {/* Testimonial added here */}
            <Footer />
          </>
        } />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-event" element={<AddEvent />} /> {/* AddEvent Route */}
        <Route path="/view-events" element={<ViewEvents />} /> {/* ViewEvents Route */}
      </Routes>
    </Router>
  );
}

export default App;
