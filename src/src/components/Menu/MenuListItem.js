import React from 'react';

class MenuListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {link, title, className} = this.props.menu;
    return (
      <li><a href={link} className={className}>{title}</a></li>
    )
  }
}

export default MenuListItem;