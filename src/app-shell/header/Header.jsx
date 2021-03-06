import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CommonNavigation from '../navigation/CommonNavigation';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header
        id="page-header"
        className="mdl-layout__header mdl-layout__header--transparent"
      >
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            <NavLink to="/">
              <img src="/images/logo.png" alt="Compnany logo" />
              <h1>Mad Science</h1>
            </NavLink>
          </span>
          <div className="mdl-layout-spacer" />
          <CommonNavigation />
        </div>
      </header>
    );
  }
}
