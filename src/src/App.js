import React, { Component } from 'react';
import './App.css';
import Loader from './components/Loader';
import Menu from './components/Menu';
import Home from './components/Home';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Loader/>
        <section id="body" className="">
          <div className="container">
          <Menu />
          <Home />
          <Resume />
          <Skills />
          <Portfolio />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
