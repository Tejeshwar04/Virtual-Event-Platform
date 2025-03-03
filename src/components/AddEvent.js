import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleAddEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      name: eventName,
      date: eventDate,
      description: eventDescription
    };

    fetch('http://localhost/Event/backend/addEvent.php', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "success") {
          alert('Event added successfully!');
          setEventName('');
          setEventDate('');
          setEventDescription('');
        } else {
          alert('Failed to add event.');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="add-event-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleAddEvent}>
        <input 
          type="text" 
          placeholder="Event Name" 
          value={eventName} 
          onChange={(e) => setEventName(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          value={eventDate} 
          onChange={(e) => setEventDate(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Event Description" 
          value={eventDescription} 
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
