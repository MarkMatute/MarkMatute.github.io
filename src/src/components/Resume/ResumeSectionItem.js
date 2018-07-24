import React from 'react';

class ResumeSectionItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, achievement, duration, desc} = this.props.item;
    return (
      <div className="resume-item">
        <h3 className="section-item-title-1">{ title }</h3>
        <h4 className="job">{ achievement }- <span className="job-date">{ duration }</span></h4>
        <div className="graduation-description">
          <p>{ desc }</p>
        </div>
      </div>
    )
  }
}

export default ResumeSectionItem;