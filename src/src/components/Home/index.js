import React from 'react';

import ProfileImage from './ProfileImage';
import ProfileDescription from './ProfileDescription';
import ProfileLinks from './ProfileLinks';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="section-vcardbody section-home" id="section-home">
          <ProfileImage image={this.props.home.image}/>
          <ProfileDescription desc={this.props.home.desc}/>
          <ProfileLinks links={this.props.home.links}/>
        </div>
      </div>
    )
  }
}