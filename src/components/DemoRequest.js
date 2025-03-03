import React from "react";
import "./DemoRequest.css";

const DemoRequest = () => {
  return (
    <div className="demo-request-page">
      <h2>Request a Free Demo</h2>
      <p>Fill out the form below, and we'll get back to you soon!</p>
      <form className="demo-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default DemoRequest;
