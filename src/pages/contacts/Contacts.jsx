import React, { Component } from 'react';
import './Contacts.css';
import ContactUsFrom from './componets/ContactUsForm';

export default class Contacts extends Component {
  render() {
    return (
      <div id="contacts-page">
        <h1>Контакти</h1>
        <div className="mdl-grid">
          <div className="mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet" />
          <div
            id="about-us-submenu"
            className="demo-card-wide mdl-card mdl-shadow--4dp mdl-cell--4-col-desktop mdl-cell--4-col-tablet"
          >
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">Телефон за връзка</h2>
            </div>
            <div className="mdl-card__supporting-text">0886 989 989</div>
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">Нашият имейл</h2>
            </div>
            <div className="mdl-card__supporting-text">izberiedu@gmail.com</div>
          </div>
          <div className="mdl-cell--4-offset mdl-cell--2-offset-tablet" />
          <div className="mdl-cell--2-offset mdl-cell--1-offset-tablet" />
          <div className="mdl-cell mdl-cell--8-col-desktop mdl-cell--6-col-tablet ">
            <ContactUsFrom />
          </div>
        </div>
      </div>
    );
  }
}
