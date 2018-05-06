import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import LocalizationPopover from '../../../shared-components/LocalizationPopover';
import LocalizedStrings from '../../../LocalizedStrings';
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
          label={LocalizedStrings.header.home}
          className="home-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label={LocalizedStrings.header.whyUs}
          className="why-us-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label={LocalizedStrings.header.services}
          className="services-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label={LocalizedStrings.header.portfolio}
          className="portfolio-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label={LocalizedStrings.header.contacts}
          className="contacts-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <FlatButton
          label={LocalizedStrings.header.hiring}
          className="hiring-nav"
          primary={true}
          onClick={this.scrollToSelection}
        />
        <LocalizationPopover />
      </nav>
    );
  }
}
