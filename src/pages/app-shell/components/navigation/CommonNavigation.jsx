import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CommonNavigation.css';

export default class CommonNavigation extends Component {
  render() {
    /*<NavLink className="mdl-navigation__link" to="/faq">Често задавани въпроси</NavLink>*/
    return (
      <nav className="mdl-navigation">
        <NavLink
          activeClassName="selected"
          className="mdl-navigation__link"
          to="/about/team"
        >
          За нас
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="mdl-navigation__link"
          to="/blog"
        >
          Блог
        </NavLink>
        <NavLink
          activeClassName="selected"
          className="mdl-navigation__link"
          to="/contacts"
        >
          Контакти
        </NavLink>
      </nav>
    );
  }
}
