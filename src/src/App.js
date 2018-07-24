import React, { Component } from 'react';

// Components
import Loader from './components/Loader';
import Menu from './components/Menu/index';
import Home from './components/Home/index';
import Resume from './components/Resume/index';
import Skills from './components/Skills/index';
import Portfolio from './components/Portfolio/index';

// Data
import homeData from './data/home.json';
import portfolioData from './data/portfolio.json';
import resumeData from './data/resume.json';
import skillsData from './data/skills.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: homeData,
      portfolio: portfolioData,
      resume: resumeData,
      skills: skillsData,
      menus: [
        {
          title: 'Home',
          link: '#page-resume',
          className: 'link-home'
        },
        {
          title: 'Resume',
          link: '#page-resume',
          className: 'link-page'
        },
        {
          title: 'Skills',
          link: '#page-skills',
          className: 'link-page'
        },
        {
          title: 'Portfolio',
          link: '#page-portfolio',
          className: 'link-page'
        },
        {
          title: 'Github',
          link: 'https://github.com/MarkMatute?tab=repositories'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Loader/>
        <section id="body" className="">
          <div className="container">
            <Menu menus={this.state.menus}/>
            <Home home={homeData}/>
            <Resume resume={this.state.resume}/>
            <Skills skills={this.state.skills}/>
            <Portfolio portfolio={this.state.portfolio}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
