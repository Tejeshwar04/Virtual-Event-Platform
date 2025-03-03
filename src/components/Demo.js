import React from 'react';
import { Link } from 'react-router-dom';
import './Demo.css'; // Import the new CSS file

const Demo = () => {
  return (
    <div className="demo-container">
      <h2>Request a Free Demo</h2>
      <p>Experience the power of virtual events firsthand.</p>
      <Link to="/login">
        <button className="demo-button">Get Demo</button>
      </Link>
    </div>
  );
};

export default Demo;
