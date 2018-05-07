import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import WebSiteDevelopmentServices from './website-development-services/WebSiteDevelopmentServices';
import LocalizedStrings from '../../../../../LocalizedStrings';

export default function servicesTabs(props) {
  return (
    <div>
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
          <WebSiteDevelopmentServices />
        </Tab>
      </Tabs>
    </div>
  );
}
