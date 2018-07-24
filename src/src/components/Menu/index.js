import React from 'react';
import MenuList from './MenuList';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-menu" id="main-menu">
        <MenuList menus={this.props.menus}/>
      </div>
    )
  }
}