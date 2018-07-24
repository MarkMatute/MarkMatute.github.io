import React from 'react';

class ProfileLinkItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.path}><i className={`fa fa-${this.props.icon}`}></i></a>
    )
  }
}

export default ProfileLinkItem;