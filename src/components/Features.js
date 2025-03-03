import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>One unified event platform for any event type</h2>
      <p>Whether you want to raise brand awareness, drive revenue, or engage attendees, we provide the perfect choice.</p>
      <div className="feature-cards">
        <div className="card">Demand Generation</div>
        <div className="card">User Conferences</div>
        <div className="card">Associations</div>
        <div className="card">DEI Events</div>
      </div>
    </section>
  );
};

export default Features;
