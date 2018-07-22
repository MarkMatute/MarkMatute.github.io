import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div className="loader-container" id="page-loader">
        <div className="loading-wrapper">
          <div className="loader-animation" id="loader-animation">
            <span className="loader"><span className="loader-inner"></span></span>
          </div>
          <div className="loader-name" id="loader-name">
            Mark <strong>Matute</strong>
          </div>
          <p className="loader-job" id="loader-job">Fullstack Web And Mobile Developer</p>
        </div>
      </div>
    )
  }
}