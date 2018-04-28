import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer id="page-footer" className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <ul className="mdl-mini-footer__link-list">
            <li>
              <NavLink to="/">Начало</NavLink>
            </li>
            <li>
              <NavLink to="/faq">Често задавани въпроси</NavLink>
            </li>
            <li>
              <NavLink to="/general-terms">Общи условия</NavLink>
            </li>
            <li>
              <NavLink to="/about">За нас</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакти</NavLink>
            </li>
          </ul>
        </div>
        <div className="mdl-mini-footer__right-section" />
      </footer>
    );
  }
}
