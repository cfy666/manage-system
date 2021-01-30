import React, { Component } from 'react';

import NavItem from './NavItem';

import './index.scss';

import { NAV } from 'config/config';

export default class SideBar extends Component {

  render () {
    const { curIdx, onNavItemClick } = this.props;
    return (
      <aside className="side-bar">
        {
          NAV.map((item, index) => {
            return (
              <NavItem
                dataItem={ item }
                index={ index }
                key={ index }
                curIdx={ curIdx }
                onNavItemClick={ onNavItemClick }
              ></NavItem>
            )
          })
        }
      </aside>
    )
  }
}