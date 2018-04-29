import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import WebSiteDevelopmentTab from './service-tab-components/website-development-tab/WebSiteDevelopmentTab';
import MarketingTab from './service-tab-components/marketing-tab/MarketingTab';
import ArtAndDesignTab from './service-tab-components/art-and-design-tab/ArtAndDesignTab';

import './Services.css';

export default function Services(props) {
  return (
    <div id="services">
      <Paper zDepth={3} style={{ padding: '15px' }}>
        <h2>Our Services</h2>
        <Tabs
          tabItemContainerStyle={{ display: 'block' }}
          inkBarStyle={{ display: 'none' }}
        >
          <Tab
            label="Website development Solutions"
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <WebSiteDevelopmentTab />
          </Tab>
          <Tab
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
          </Tab>
        </Tabs>
      </Paper>
    </div>
  );
}
