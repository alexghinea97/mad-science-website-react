import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import services from './website-services.json';
import WebsiteServiceModal from './WebsiteServiceModal';

export default class WebSiteServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedService: {
        name: ''
      }
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(eventData) {
    console.log(eventData.target);
    this.setState({
      open: true,
      selectedService: { name: eventData.target.innerText }
    });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
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
        />
      </div>
    );
  }
}
