import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import WebSiteDevelopmentTab from './WebSiteDevelopmentTab';
import MarketingTab from './MarketingTab';
import ArtAndDesignTab from './ArtAndDesignTab';

export default function Services(props) {
  return (
    <div id="services">
      <Paper zDepth={3} style={{ padding: '15px' }}>
        <h2>Our Services</h2>
        <Tabs>
          <Tab label="Website development">
            <WebSiteDevelopmentTab />
          </Tab>
          <Tab label="Marketing">
            <MarketingTab />
          </Tab>
          <Tab label="Art and Design">
            <ArtAndDesignTab />
          </Tab>
        </Tabs>
      </Paper>
    </div>
  );
}
