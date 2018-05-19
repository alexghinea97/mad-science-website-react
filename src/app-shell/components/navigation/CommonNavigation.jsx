import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LocalizationPopover from '../../../shared-components/LocalizationPopover';
import LocalizedStrings from '../../../LocalizedStrings';
import './CommonNavigation.css';

export default class CommonNavigation extends Component {
  scrollToSelection(eventData) {
    let selectedNav = eventData.target.className;
    let lastClass = selectedNav.substring(selectedNav.lastIndexOf(' ') + 1);
    let wantedSection = lastClass.substring(0, lastClass.lastIndexOf('-'));

    document.querySelector('#' + wantedSection).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    /*<NavLink className="mdl-navigation__link" to="/faq">Често задавани въпроси</NavLink>*/
    return (
      <nav className="mdl-navigation">
        <Button
          className="home-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          {LocalizedStrings.header.home}
        </Button>
        <Button
          className="why-us-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          {LocalizedStrings.header.whyUs}
        </Button>
        <Button
          className="services-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          {LocalizedStrings.header.services}
        </Button>
        <Button
          className="portfolio-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          {LocalizedStrings.header.portfolio}
        </Button>
        <Button
          className="contacts-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          {LocalizedStrings.header.contacts}
        </Button>
        <Button
          className="hiring-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          {LocalizedStrings.header.hiring}
        </Button>
        <LocalizationPopover />
      </nav>
    );
  }
}
