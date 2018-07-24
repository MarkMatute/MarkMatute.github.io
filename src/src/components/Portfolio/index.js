import React from 'react';
import ProjectItem from './ProjectItem';

export default class Portfolio extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const projectItems = this.props.portfolio.map((project, index) => {
      return (
        <ProjectItem
          link={project.link}
          image={project.image}
          title={project.title}
          desc={project.desc} 
          key={index}/>
      )
    });

    return (
      <div className="section-vcardbody section-page" id="page-portfolio">
        <div className="section-portfolio">
          <h2 className="section-title">Portfolio</h2>
          <div className="projects-list">
            {projectItems}
          </div>
        </div>
      </div>
    )
  }
}