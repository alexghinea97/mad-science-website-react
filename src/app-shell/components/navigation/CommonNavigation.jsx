import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
    return (
      <nav className="mdl-navigation">
        <Button
          className="home-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          HOME
        </Button>
        <Button
          className="why-us-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          WHY US
        </Button>
        <Button
          className="services-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          SERVICES
        </Button>
        <Button
          className="portfolio-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          PORTFOLIO
        </Button>
        <Button
          className="contacts-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          CONTACTS
        </Button>
        <Button
          className="hiring-nav"
          color="primary"
          onClick={this.scrollToSelection}
        >
          HIRING
        </Button>
      </nav>
    );
  }
}
