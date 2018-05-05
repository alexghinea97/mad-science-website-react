import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import ServicesOrderStepper from '../../components/ServicesOrderStepper';
import WebsiteServices from './components/WebsiteServices';

import './WebSiteDevelopmentTab.css';

export default class WebSiteDevelopmentTab extends Component {
  render() {
    return (
      <div id="website-development-tab">
        <h3>Website Developent</h3>
        <WebsiteServices />
        <br />
        <Divider />
        <br />
        <Paper zDepth={1}>
          <ServicesOrderStepper />
        </Paper>
      </div>
    );
  }
}
