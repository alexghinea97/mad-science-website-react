import React, { Component } from 'react';
import LocalizedStrings from '../../../../../../LocalizedStrings';
import { RaisedButton } from 'material-ui';
import services from './website-development-services.js';

import './WebSiteDevelopmentServices.css';

export default class WebSiteDevelopmentTab extends Component {
  render() {
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
                  onClick={this.props.handleOpen}
                  style={{ marginBottom: '10px' }}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
