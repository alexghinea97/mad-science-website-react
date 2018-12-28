import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import services from './website-development-services.js';
import './WebSiteDevelopmentServices.css';

export default class WebSiteDevelopmentTab extends Component {
  render() {
    return (
      <div id="website-development-tab">
        <h3>WEBSITE DEVELOPMENT</h3>
        <div>
          <div id="website-services-image" />
        </div>
        <div>
          <div>
            {services.map((service, index) => {
              return (
                <Button
                  fullWidth
                  variant="raised"
                  color="secondary"
                  onClick={this.props.handleOpen}
                  style={{ marginBottom: '10px' }}
                  key={index}
                >
                  {service.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
