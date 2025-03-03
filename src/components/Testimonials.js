import React from 'react';
import './Testimonials.css';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "This platform made our event a huge success!",
      name: "John Doe",
      position: "Event Organizer"
    },
    {
      quote: "I loved the networking features, highly recommend it!",
      name: "Jane Smith",
      position: "Conference Attendee"
    },
    {
      quote: "User-friendly and feature-rich platform. A game-changer!",
      name: "Alex Johnson",
      position: "Webinar Host"
    }
  ];

  return (
    <div className="testimonial-section">
      <h2>What Our Users Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">"{testimonial.quote}"</p>
            <p className="name">{testimonial.name}</p>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
