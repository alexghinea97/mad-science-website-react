import React, { Component } from 'react';
import TeamMembersList from './components/TeamMembersList';
import AboutTheIdea from './components/AboutTheIdea';
import AsideMenu from './components/AsideMenu';

import './About.css';
import { Route, Switch } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div id="about-page">
        <h1>За нас</h1>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
          <div
            id="about-us-submenu"
            className="mdl-cell mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
          >
            <AsideMenu />
          </div>
          <div className="mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <Switch>
              <Route exact path="/about/team" component={TeamMembersList} />
              <Route path="/about/" component={AboutTheIdea} />
              <Route path="/about/idea" component={AboutTheIdea} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
