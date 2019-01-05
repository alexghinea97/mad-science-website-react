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
              <NavLink to="/general-terms">General terms</NavLink>
            </li>
          </ul>
          <p>All rights reserved to Mad Science Bulgaria Ltd</p>
        </div>
        <div className="mdl-mini-footer__right-section" />
      </footer>
    );
  }
}
