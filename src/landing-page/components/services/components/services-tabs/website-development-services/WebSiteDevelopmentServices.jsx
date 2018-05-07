import React, { Component } from 'react';
import LocalizedStrings from '../../../../../../LocalizedStrings';
import { RaisedButton } from 'material-ui';
import services from './website-development-services.js';
import WebsiteServiceModal from './components/WebsiteServiceModal';

import './WebSiteDevelopmentServices.css';

export default class WebSiteDevelopmentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedService: {
        name: '',
        index: 0
      }
    };
  }

  handleOpen = eventData => {
    this.setState({
      open: true,
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

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const modalFill = services[this.state.selectedService.index].component;
    return (
      <div id="website-development-tab">
        <h3>{LocalizedStrings.body.services.websiteDev}</h3>
        <div>
          <div id="website-services-image" />
        </div>
        <div>
          <div>
            {services.map((service, index) => {
              return (
                <RaisedButton
                  fullWidth={true}
                  label={service.name}
                  secondary={true}
                  onClick={this.handleOpen}
                  style={{ marginBottom: '10px' }}
                  key={index}
                />
              );
            })}
            <WebsiteServiceModal
              title={this.state.selectedService.name}
              open={this.state.open}
              handleClose={this.handleClose}
            >
              {React.createElement(modalFill)}
            </WebsiteServiceModal>
          </div>
        </div>
      </div>
    );
  }
}
