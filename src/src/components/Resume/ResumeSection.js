import React from 'react';
import ResumeSectionItem from './ResumeSectionItem';

class ResumeSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const sectionItems = this.props.items.map((item, index) => {
      return (
        <ResumeSectionItem item={item} key={index}/>
      )
    });

    return (
      <div className="section-education">
        <h2 className="section-title2"><i className="fa fa-flag"></i>&nbsp; {this.props.title}</h2>
        { sectionItems }
      </div>
    )
  }
}

export default ResumeSection;