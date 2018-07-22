import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="section-vcardbody section-home" id="section-home">
          <div className="vcard-profile-pic">
            <img src="img/profile2.jpg" id="profile2" alt="" />
            <img src="img/profile.jpg" id="profile1" className="profileActive" alt="" />
          </div>
          <div className="vcard-profile-description">
            <h1 className="profile-title">Hi, I'm <span className="color1">Mark Matute!</span></h1>
            <hr className="hr1" />
            <div className="vcard-profile-description-text">
            <p>
              Passionate Software Engineer who loves developing applications written in Javascript, PHP etc
              <br/> IT Healthcare advocate.
            </p>
            </div>
            <div className="vcard-profile-description-feature">
              <div className="vcard-profile-description-ft-item">
                <p>markernest.matute@gmail.com / +639758675463 / +65 98315311</p>
              </div>
            </div>
          </div>
          <div className="vcard-footer">
            <div className="footer-social-icons">
              <a href="https://github.com/MarkMatute"><i className="fa fa-github"></i></a>
              <a href="https://www.facebook.com/ernest.r.matute"><i className="fa fa-facebook"></i></a>
              <a href="https://www.linkedin.com/profile/view?id=AAIAACEb-mMBkYc4qOPDmdlHw5HM8CKLFaLCJis&trk=nav_responsive_tab_profile_pic"><i className="fa fa-linkedin"></i></a>
              <a href="https://plus.google.com/u/0/111892051456499534026"><i className="fa fa-google-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}