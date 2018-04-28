import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './CommonNavigation.css';

export default class CommonNavigation extends Component {
  scrollToSelection(eventData) {
    let selectedNav = eventData.target.className;
    let wantedSection = selectedNav.substring(0, selectedNav.lastIndexOf('-'));

    document.querySelector('#' + wantedSection).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    /*<NavLink className="mdl-navigation__link" to="/faq">Често задавани въпроси</NavLink>*/
    return (
      <nav className="mdl-navigation">
        <FlatButton
          label="Home"
          className="home-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label="Why Us"
          className="why-us-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label="Services"
          className="services-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label="Portfolio"
          className="portfolio-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />

        <FlatButton
          label="Contacts"
          className="contacts-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
      </nav>
    );
  }
}
