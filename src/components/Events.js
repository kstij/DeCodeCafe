import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Events.css';

// Import images
import logoImage from '../assets/devs.png';

const Events = () => {
  const upcomingEvents = [
    { title: 'Upcoming Event 1', image: logoImage, description: 'Description for upcoming event 1.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_1' },
  ];

  const pastEvents = [
    { title: 'Past Event 1', image: logoImage, description: 'Description for past event 1.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_2' },
    { title: 'Past Event 2', image: logoImage, description: 'Description for past event 2.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_3' },
    { title: 'Past Event 3', image: logoImage, description: 'Description for past event 3.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_4' },
    { title: 'Past Event 4', image: logoImage, description: 'Description for past event 4.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_5' },
    { title: 'Past Event 5', image: logoImage, description: 'Description for past event 5.', youtubeUrl: 'https://www.youtube.com/watch?v=video_id_6' },
    // Add more past events here
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    ease: "ease-in-out",
    adaptiveHeight: true,
    cssEase: "linear",
  };


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
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="events-section">
        <h3>Past Events</h3>
        <Slider {...settings}>
          {pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              <a href={event.youtubeUrl} className="event-link">
                <div className="event-image">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="event-overlay">
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
