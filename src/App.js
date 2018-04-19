import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';
import Resume from './Resume.js';
import Video from './Video.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Video />
        <About />
        <hr className="container" />
        <Skills />
        <hr className="container" />
        <Portfolio />
        <hr className="container" />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
