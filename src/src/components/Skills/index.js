import React from 'react';
import SkillList from './SkillList';

export default class Skills extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-vcardbody section-page" id="page-skills">
        <div className="section-skills">

          <h2 className="section-title">SKILLS</h2>
          <h3 className="section-item-title-2"><i className="fa fa-code"></i>&nbsp;&nbsp; Code Skills</h3>
      
          <SkillList skills={this.props.skills}/>

        </div>
      </div>
    )
  }
}