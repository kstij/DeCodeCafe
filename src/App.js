import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="team">
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
}

export default App;
