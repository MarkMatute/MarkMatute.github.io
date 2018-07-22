import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="main-menu" id="main-menu">
        <ul className="main-menu-list">
          <li><a href="#page-resume" className="link-home">Home</a></li>
          <li><a href="#page-resume" className="link-page">Resume</a></li>
          <li><a href="#page-skills" className="link-page">Skills</a></li>
          <li><a href="#page-portfolio" className="link-page">Portfolio</a></li>
          <li><a href="https://github.com/MarkMatute?tab=repositories">Github Repo</a></li>
        </ul>
      </div>
    )
  }
}