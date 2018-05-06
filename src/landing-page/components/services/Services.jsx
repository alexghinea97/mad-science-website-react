import React from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import LocalizedStrings from '../../../LocalizedStrings';
import WebSiteDevelopmentTab from './service-tab-components/website-development-tab/WebSiteDevelopmentTab';

import './Services.css';

export default function Services(props) {
  return (
    <div id="services">
      <Paper zDepth={3} style={{ padding: '15px' }}>
        <h2>{LocalizedStrings.body.services.title}</h2>
        <Tabs
          tabItemContainerStyle={{ display: 'block' }}
          inkBarStyle={{ display: 'none' }}
        >
          <Tab
            label={LocalizedStrings.body.services.buttonWebsiteDevSol}
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <WebSiteDevelopmentTab />
          </Tab>
          {/* <Tab
            label="Marketing Solutions"
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <MarketingTab />
          </Tab>
          <Tab
            label="Art and Design Solutions"
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <ArtAndDesignTab />
          </Tab> */}
        </Tabs>
      </Paper>
    </div>
  );
}
