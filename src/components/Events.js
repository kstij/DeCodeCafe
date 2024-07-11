import React from 'react';
import './Events.css';

// Import images
import logoImage from '../assets/devs.png';
import logoImage1 from '../assets/devs.png';

const Events = () => {
  const upcomingEvents = [
    { title: 'Upcoming Event 1', image: logoImage1, description: 'Description for upcoming event 1.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_1' },
  ];

  const pastEvents = [
    { title: 'Past Event 1', image: logoImage, description: 'Description for past event 1.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_2' },
  ];

  return (
    <div className="events">
      <h2>Our Events</h2>
      <div className="events-section">
        <h3>Upcoming Events</h3>
        <div className="upevent-cards">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="upevent-card">
              <a href={event.youtubeUrl} className="upevent-link">
                <div className="upevent-image">
                  <div className="upevent-overlay">
                    <div className="upevent-info">
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  </div>
                  <img src={event.image} alt={event.title} className="event-image" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="events-section">
        <h3>Past Events</h3>
        <div className="event-cards">
          {pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              <a href={event.youtubeUrl} className="event-link">
                <div className="event-image">
                  <div className="event-overlay">
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  </div>
                  <img src={event.image} alt={event.title} className="event-image" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
