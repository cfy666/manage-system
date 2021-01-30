import React, { Component } from 'react';

import './index.scss';

import HeaderLogo from './Logo';
import HeaderTitle from './Title';
import Logout from './Logout';

export default class Header extends Component {
  render () {
    
    const { history } = this.props;

    return (
      <header className="header">
        <HeaderLogo></HeaderLogo>
        <HeaderTitle></HeaderTitle>
        <Logout history={ history }></Logout>
      </header>
    )
  }
}