import React from 'react';
import ResumeSection from './ResumeSection';

export default class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const sections = this.props.resume.map((resumeItem, index) => {
      return (
        <ResumeSection 
          title={resumeItem.title} 
          items={resumeItem.items}
          key={index}/>
      )
    });
  
    return (
      <div className="section-vcardbody section-page" id="page-resume">

        { sections }

        <div className="page-footer">
          <div className="resume-buttons">
            <a href="https://github.com/MarkMatute/MarkMatute.github.io/raw/master/MarkErnest.pdf" target="_blank" className="btn btn-default btn-default2"><i className="fa fa-download"></i>&nbsp; Download my resume</a>
            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download"></i>&nbsp;  Get in Touch</a>
          </div>
        </div>

      </div>
    )
  }
}