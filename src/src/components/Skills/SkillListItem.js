import React from 'react';

class SkillListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { rating, skill } = this.props.skill;
    return (
      <li>
        <div className="progress">
          <div className="progress-bar" data-percent={rating + "%"} role="progressbar" style={{ width: rating + '%' }}>
            <span className="sr-only">{rating}% Complete</span>
          </div>
          <span className="progress-type">{skill}</span>
          <span className="progress-completed">{rating}%</span>
        </div>
      </li>
    )
  }
}

export default SkillListItem;