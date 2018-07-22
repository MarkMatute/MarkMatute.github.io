import React from 'react';

export default class Resume extends React.Component {
  render() {
    return (
      <div className="section-vcardbody section-page" id="page-resume">
        <div className="section-education">
          <h2 className="section-title2"><i className="fa fa-flag"></i>&nbsp; Work Experience</h2>
          <div className="resume-item">
            <h3 className="section-item-title-1">iHealth Labs Singapore</h3>
            <h4 className="job">Software Engineer- <span className="job-date">April 2018 - current</span></h4>
            <div className="graduation-description">
              <p>Develop applications with Fullstack Javascript.</p>
            </div>
          </div>
          <div className="resume-item">
            <h3 className="section-item-title-1">ISBX Inc.</h3>
            <h4 className="job">Fullstack Web and Mobile Developer - <span className="job-date">June 2017 - Feb 2018</span></h4>
            <div className="graduation-description">
              <p>Develop applications for iOS, Android and the Web.</p>
            </div>
          </div>
          <div className="resume-item">
            <h3 className="section-item-title-1">EACOMM Corporation</h3>
            <h4 className="job">PHP & MySQL Consultant- <span className="job-date">Nov 2017 - January 2018 [4 months]</span></h4>
            <div className="graduation-description">
              <p>My task here is to develop and deploy web applications written with PHP.</p>
            </div>
          </div>
          <div className="resume-item">
            <h3 className="section-item-title-1">EACOMM Corporation</h3>
            <h4 className="job">Junior Software Developer - <span className="job-date">May 2016 - June 2017 [1 year 1 month]</span></h4>
            <div className="graduation-description">
              <p>My task are to create and maintain web applications in PHP,JavaScript and Java. My favorite task is to visualize realtime data.</p>
            </div>
          </div>
          <div className="resume-item">
            <h3 className="section-item-title-1">JBROS Corporation</h3>
            <h4 className="job">Web Developer Intern - <span className="job-date">July 2015 - September 2015 [3 Months]</span></h4>
            <div className="graduation-description">
              <p>My task is to maintain thier website.</p>
            </div>
          </div>
          <div className="resume-item">
            <h3 className="section-item-title-1">WCubes Solution</h3>
            <h4 className="job">Web Developer Intern - <span className="job-date">May 2015 - July 2015 [3 Months]</span></h4>
            <div className="graduation-description">
              <p>My task is to help the team in the development on Web Application written in Joomla and CodeIgniter</p>
            </div>
          </div>
          <div className="resume-item">
            <h3 className="section-item-title-1">Working as a Freelance Mobile and Web Developer</h3>
            <h4 className="job">Web and Mobile Developer - <span className="job-date"> - </span></h4>
            <div className="graduation-description">
              <p>Created web and mobile applications for clients. From wordpress sites to full web backend with mobile frontend applications using CodeIgniter and Apache Cordova.</p>
            </div>
          </div>
        </div>

        <div className="section-education">
          <h2 className="section-title">Resume</h2>
          <h2 className="section-title2"><i className="fa fa-university"></i>&nbsp; Education</h2>

          <div className="resume-item">
            <h3 className="section-item-title-1">BS Information Technology</h3>
            <h4 className="graduation-time">Bulacan State University - <span className="graduation-date">Graduation April 2016</span></h4>
            <div className="graduation-description">
              <p>I finished my Bachelor's Degree at Bulacan State University being a Dean's Lister, 4th Placer at Best Thesis Competition and 2nd Placer on Java Competition.</p>
            </div>
          </div>

          <div className="resume-item">
            <h3 className="section-item-title-1">Secondary Education</h3>
            <h4 className="graduation-time">Holy Spirit Academy of Malolos - Graduation March 2011</h4>
            <div className="graduation-description">
              <p>I encountered HTML the first time.</p>
            </div>
          </div>

          <div className="resume-item">
            <h3 className="section-item-title-1">Elementary Education</h3>
            <h4 className="graduation-time">Holy Spirit Academy of Malolos - Graduation March 2007</h4>
            <div className="graduation-description">
              <p>I encountered Computer and Internet the first time.</p>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <div className="resume-buttons">
            <a href="MarkErnest.pdf" target="_blank" className="btn btn-default btn-default2"><i className="fa fa-download"></i>&nbsp; Download my resume</a>
            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download"></i>&nbsp;  Get in Touch</a>
          </div>
        </div>

      </div>
    )
  }
}