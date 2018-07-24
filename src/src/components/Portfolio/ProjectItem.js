import React from 'react';

class ProjectItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const style = { backgroundImage: "url(" + this.props.image + ")" };

    return (
      <div className="project-item">
        <a href={this.props.link} target="_blank">{this.props.title}</a>
        <a href={this.props.image} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={style}>
          <div className="project-description-wrapper">
            <div className="project-description">
              <h2 className="project-title">{this.props.title}</h2>
              <span className="see-more">{this.props.desc}</span>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default ProjectItem;