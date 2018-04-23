import React, { Component } from 'react';
import AppSettings from '../../appSettings.json';
import FacebookSignIn from './FacebookSignIn';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.statusChangeHandler = this.statusChangeHandler.bind(this);
  }

  signInWithFacebook(facebookLoginStatus) {
    let facebookLoginRequest = {
      accessToken: facebookLoginStatus.authResponse.accessToken
    };

    console.log(facebookLoginRequest.accessToken);

    let facebookLoginRequestStringified = JSON.stringify(facebookLoginRequest);

    fetch(AppSettings['backend-url'] + '/api/authentication/FacebookLogin', {
      method: 'POST',
      body: facebookLoginRequestStringified,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(function(responce) {
      responce.json().then(function(res) {
        console.log(res);
      });
    });
  }

  statusChangeHandler(facebookLoginStatus) {
    this.signInWithFacebook(facebookLoginStatus);
  }

  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell--4-offset mdl-cell--2-offset-tablet mdl-cell--hide-phone" />
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h1 className="mdl-card__title-text">Влез в Книга за Книга</h1>
                <h2>Логин</h2>
              </div>
              <div className="mdl-card__supporting-tet" />
              <div className="mdl-card__actions mdl-card--border">
                <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate" />
                <FacebookSignIn
                  {...{
                    appId: '1835215159884213',
                    onAuthStatusChanged: this.statusChangeHandler
                  }}
                />
              </div>
              <div className="mdl-card__menu">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">share</i>
                </button>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--4-col mdl-cell--0-col-phone" />
        </div>
      </div>
    );
  }
}
