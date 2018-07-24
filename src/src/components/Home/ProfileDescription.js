import React from 'react';

class ProfileDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {displayName, text, contacts} = this.props.desc;
    return (
      <div className="vcard-profile-description">
        <h1 className="profile-title">Hi, I'm <span className="color1">{displayName}!</span></h1>
        <hr className="hr1" />
        <div className="vcard-profile-description-text">
          <p>{text}</p>
        </div>
        <div className="vcard-profile-description-feature">
          <div className="vcard-profile-description-ft-item">
            <p>{contacts}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileDescription;