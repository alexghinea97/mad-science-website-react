import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import services from './website-services.js';
import WebsiteServiceModal from './WebsiteServiceModal';

export default class WebSiteServices extends Component {
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
    console.log(eventData.target);
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
    const modalFill = services[this.state.selectedService.index].component();
    return (
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
          {modalFill}
        </WebsiteServiceModal>
      </div>
    );
  }
}
