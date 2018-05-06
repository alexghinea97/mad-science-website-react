import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import WebSiteDevelopmentTab from './website-development-tab/WebSiteDevelopmentTab';
import LocalizedStrings from '../../../../../LocalizedStrings';

export default function serviceTabs(props) {
  return (
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
  );
}
