import React, { Component } from 'react';
import './SocialMediaBar.css';
import { NavLink } from 'react-router-dom';

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div className="icon-bar">
        <NavLink to="#" className="facebook">
          <i className="fa fa-facebook fa-fw" />
        </NavLink>
        <NavLink to="#" className="linkedin">
          <i className="fa fa-linkedin fa-fw" />
        </NavLink>
        <NavLink to="#" className="mail">
          <i className="fa fa-envelope fa-fw" />
        </NavLink>
      </div>
    );
  }
}
