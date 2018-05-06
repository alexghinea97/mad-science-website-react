import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocalizedStrings from '../../../LocalizedStrings';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer id="page-footer" className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <ul className="mdl-mini-footer__link-list">
            <li>
              <NavLink to="/">{LocalizedStrings.footer.home}</NavLink>
            </li>
            <li>
              <NavLink to="/faq">{LocalizedStrings.footer.faq}</NavLink>
            </li>
            <li>
              <NavLink to="/general-terms">
                {LocalizedStrings.footer.generalTerms}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">{LocalizedStrings.footer.aboutUs}</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">
                {LocalizedStrings.footer.contacts}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mdl-mini-footer__right-section" />
      </footer>
    );
  }
}
