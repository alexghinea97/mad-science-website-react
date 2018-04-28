import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import WebSiteDevelopmentTab from './WebSiteDevelopmentTab';
import MarketingTab from './MarketingTab';
import ArtAndDesignTab from './ArtAndDesignTab';

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
            label="Website development"
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <WebSiteDevelopmentTab />
          </Tab>
          <Tab
            label="Marketing"
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <MarketingTab />
          </Tab>
          <Tab
            label="Art and Design"
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
