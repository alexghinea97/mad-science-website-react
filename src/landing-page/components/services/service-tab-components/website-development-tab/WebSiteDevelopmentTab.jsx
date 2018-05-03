import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import ServicesOrderStepper from '../../componentns/ServicesOrderStepper';
import Templates from './components/Templates';
import WebSiteServices from './components/WebSiteServices';

export default class WebSiteDevelopmentTab extends Component {
  render() {
    return (
      <div>
        <h3>WebSite Developent</h3>
        <p>This is an example tab.</p>
        <Templates />
        <WebSiteServices />
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
