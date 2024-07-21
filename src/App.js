// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import OurTeam from './components/OurTeam';
import CodeOfConduct from './components/CodeOfConduct';
import AllTeamMembers from './components/AllTeamMembers';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <AboutUs />
              </section>
              <section id="events">
                <Events />
              </section>
              <section id="team">
                <OurTeam />
              </section>
              <Footer />
            </div>
          } />
          <Route path="/coc" element={<CodeOfConduct />} />
          <Route path="/our-team" element={<AllTeamMembers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
