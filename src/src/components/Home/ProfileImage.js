import React from 'react';

class ProfileImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vcard-profile-pic">
        <img src={this.props.image} id="profile2" alt="" />
        <img src={this.props.image} id="profile1" className="profileActive" alt="" />
      </div>
    )
  }
}

export default ProfileImage;