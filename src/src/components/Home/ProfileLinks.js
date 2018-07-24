import React from 'react';
import ProfileLinkItem from './ProfileLinkItem';

class ProfileLinks extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const profileLinkItems = this.props.links.map((link) => {
      return (
        <ProfileLinkItem path={link.path} icon={link.icon} />
      )
    })
    return (
      <div className="vcard-footer">
        <div className="footer-social-icons">
          {profileLinkItems}
        </div>
      </div>
    )
  }
}

export default ProfileLinks;