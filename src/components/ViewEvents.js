import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ViewEvents.css';

const ViewEvents = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost/Event/backend/getEvents.php')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const eventsForSelectedDate = events.filter(event => event.date === selectedDate.toLocaleDateString('en-CA'));

  return (
    <div className="view-events-container">
      <h2>View Events</h2>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      
      <h3>Events on {selectedDate.toDateString()}:</h3>
      <ul>
        {eventsForSelectedDate.length > 0 ? (
          eventsForSelectedDate.map((event, index) => (
            <li key={index}>
              <h4>{event.name}</h4>
              <p>{event.description}</p>
            </li>
          ))
        ) : (
          <p>No events on this day.</p>
        )}
      </ul>
    </div>
  );
};

export default ViewEvents;
