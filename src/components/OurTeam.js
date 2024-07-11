import React from 'react';
import './OurTeam.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
// Import other images as needed

const teamMembers = [
  { name: 'Rahul Khinchi', role: 'CEO', image: team1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium nibh at ante pulvinar.' },
  { name: 'Jane Smith', role: 'CTO', image: team2, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { name: 'Rahul Khinchi', role: 'CEO', image: team1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium nibh at ante pulvinar.' },
  { name: 'Jane Smith', role: 'CTO', image: team2, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { name: 'Jane Smith', role: 'CTO', image: team2, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },

];

const OurTeam = () => {
  return (
    <div className="our-team">
      <h2>Our Team</h2>
      <div className="team-cards">
        {teamMembers.slice(0, 5).map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-member">
              <img src={member.image} alt={member.name} className="team-member-img" />
            </div>
            <div className="team-member-hover">
              <div className="team-member-hover-content">
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="team-card show-all-card">
          <a href="/our-team" className="show-all-button">Show All</a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
