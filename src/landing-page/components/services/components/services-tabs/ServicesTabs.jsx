import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import WebSiteDevelopmentServices from './website-development-services/WebSiteDevelopmentServices';
import WebsiteServiceModal from './WebsiteServiceModal';
import LocalizedStrings from '../../../../../LocalizedStrings';

import services from './website-development-services/website-development-services';

export default class ServicesTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedService: {
        name: '',
        index: 0
      }
    };
  }

  handleModalOpen = eventData => {
    this.setState({
      isModalOpen: true,
      selectedService: {
        name: eventData.target.innerText,
        index: services.findIndex(service => {
          return (
            service.name.toUpperCase() ===
            eventData.target.innerText.toUpperCase()
          );
        })
      }
    });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const modalFill = services[this.state.selectedService.index].component;
    return (
      <div>
        <h2 style={{ marginBottom: '20px' }}>
          {LocalizedStrings.body.services.title}
        </h2>
        <Tabs
          tabItemContainerStyle={{ display: 'block' }}
          inkBarStyle={{ display: 'none' }}
        >
          <Tab
            label={LocalizedStrings.body.services.buttonWebsiteDevSol}
            className="service-tab"
            style={{ display: 'block', width: '100%' }}
          >
            <WebSiteDevelopmentServices handleOpen={this.handleModalOpen} />
          </Tab>
        </Tabs>
        <WebsiteServiceModal
          title={this.state.selectedService.name}
          open={this.state.isModalOpen}
          handleClose={this.handleModalClose}
          handleAddService={this.handleAddService}
        >
          {React.createElement(modalFill, {
            handleModalClose: this.handleModalClose
          })}
        </WebsiteServiceModal>
      </div>
    );
  }
}
