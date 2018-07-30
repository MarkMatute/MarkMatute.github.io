import React from 'react';
import MenuListItem from './MenuListItem';

class MenuList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const menuItems = this.props.menus.map((menu, index) => {
      return (
        <MenuListItem menu={menu} key={index}/>
      )
    });

    return (
      <ul className="main-menu-list">
        { menuItems }
      </ul>
    )
  }
}

export default MenuList;