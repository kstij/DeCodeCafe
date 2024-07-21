// src/components/AllTeamMembers.js
import React from 'react';
import './AllTeamMembers.css'; // Create this file for additional styling
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
// Import other images as needed

const teamMembers = [
  // Repeat or extend this array to include all 30 team members
  { name: 'Rahul Khinchi', role: 'CEO', image: team1, description: 'Lorem ipsum dolor sit amet.' },
  { name: 'Jane Smith', role: 'CTO', image: team2, description: 'Sed do eiusmod tempor incididunt.' },
  // Add more members as needed
];

const AllTeamMembers = () => {
  return (
    <div className="all-team-members">
      <h2>Our Team</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
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
      </div>
    </div>
  );
};

export default AllTeamMembers;
