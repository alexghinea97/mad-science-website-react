import React, { Component } from 'react';
import LocalizedStrings from '../../../../../../LocalizedStrings';
import WebsiteServices from './components/WebsiteServices';

import './WebSiteDevelopmentTab.css';

export default class WebSiteDevelopmentTab extends Component {
  render() {
    return (
      <div id="website-development-tab">
        <h3>{LocalizedStrings.body.services.websiteDev}</h3>
        <div>
          <div id="website-services-image" />
        </div>
        <div>
          <WebsiteServices />
        </div>
      </div>
    );
  }
}
