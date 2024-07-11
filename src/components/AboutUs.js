import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const cards = [
    { title: 'What is DecodeCafe Community?', content: 'Decode Cafe is a community designed for individuals interested in programming, software development, and technology. It aims to provide a space for developers, engineers, and tech enthusiasts to learn, share knowledge, and collaborate on projects.' },
    { title: 'Benefits', content: 'Get opportunities in different domains and build your resume by creating various project by collaborating with other folks in the community.' },
    { title: 'Community', content: 'Being a techie community, we assure pretty much everything you ask for! We together conduct events and workshops, hold sessions and talks, and even host coding competitions and hackathons.' },
    { title: 'Opportunities', content: 'The Organization is an opportunity bundle which includes many fields of knowledge. Explore it in your ways and learn it along us!' },
    { title: 'Reciprocate', content: 'Reciprocate your knowledge and skills with other techies in community enhancing EVERYONEs knowledge and growth.' },
    { title: 'Collaboration', content: 'Collaborate with folks from different regions and learn and connect with geeks' },
  ];

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
