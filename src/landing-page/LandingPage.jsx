import React, { Component } from 'react';
import ValueProposition from './value-proposition/ValueProposition';
import SocialMediaBar from './social-media-bar/SocialMediaBar';
import WhyUs from './why-us/WhyUs';
import Services from './services/Services';
import Contacts from './contacts/Contacts';
import Hiring from './hiring/Hiring';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        <SocialMediaBar />
        <h1 id="home" className="title-landing-page">
          Mad Science
        </h1>
        <img
          src="/images/logo-landing-page.png"
          id="landing-page-logo"
          alt=""
        />
        <h2 className="center">Let us help you with your digital presence.</h2>
        <div className="mdl-grid">
          <div className="mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet" />
          <div
            id="page-subtitle"
            className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet"
          >
            <ValueProposition />
          </div>
          <div className="mdl-cell--1-offset-desktop mdl-cell--1-offset-phone" />
          <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--8-col-tablet">
            <WhyUs />
          </div>
          <div className="mdl-cell--1-offset-desktop mdl-cell--1-offset-phone" />
          <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--8-col-tablet">
            <Services />
          </div>
          <div className="mdl-cell--1-offset-desktop mdl-cell--1-offset-phone" />
          {/* <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--8-col-tablet">
            <Portfolio />
          </div>
          <div className="mdl-cell--1-offset-desktop mdl-cell--1-offset-phone" /> */}
          <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--8-col-tablet">
            <Contacts />
          </div>
          <div className="mdl-cell--1-offset-desktop mdl-cell--1-offset-phone" />
          <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--8-col-tablet">
            <Hiring />
          </div>
        </div>
      </div>
    );
  }
}
