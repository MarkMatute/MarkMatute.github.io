import React from 'react';
import SkillListItem from './SkillListItem';

class SkillList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const skillItems = this.props.skills.map((skill, index) => {
      return (
        <SkillListItem skill={skill} key={index} />
      )
    })

    return (
      <ul className="skills-list">
        { skillItems }
      </ul>
    )
  }
}

export default SkillList;