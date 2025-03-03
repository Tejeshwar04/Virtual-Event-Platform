import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const logo = process.env.PUBLIC_URL + '/logos/logo.png';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-event">Add Event</Link></li>
          <li><Link to="/view-events">View Events</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome to Virtual Event Platform</h1>
        <p>Your gateway to the best virtual experiences!</p>

        <div className="dashboard-buttons">
          <Link to="/add-event" className="button add-event-btn">Add Event</Link>
          <Link to="/view-events" className="button view-event-btn">View Events</Link>
        </div>
      </div>

      <div className="dashboard-quotes">
        <h2>Inspiring Quotes</h2>
        <p>“The best way to predict the future is to create it.” – Peter Drucker</p>
        <p>“Opportunities don't happen, you create them.” – Chris Grosser</p>
        <p>“Believe you can and you're halfway there.” – Theodore Roosevelt</p>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2025 Virtual Event Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
