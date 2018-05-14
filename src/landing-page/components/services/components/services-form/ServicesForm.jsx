import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import LocalizedStrings from '../../../../../LocalizedStrings';
import DatePicker from 'material-ui/DatePicker';
import './ServicesForm.css';

export default class ServicesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: ''
    };
  }

  handleInfoChange = eventData => {
    this.setState({
      info: eventData.target.value
    });
  };

  handleEmailChange = eventData => {
    this.setState({
      email: eventData.target.value
    });
  };

  handleNameChange = eventData => {
    this.setState({
      name: eventData.target.value
    });
  };

  render() {
    return (
      <div id="services-form">
        <h2>{LocalizedStrings.body.services.formAbouTheRequest.title}</h2>
        <div>
          <TextField
            fullWidth={true}
            hintText=""
            floatingLabelText={
              LocalizedStrings.body.services.formAbouTheRequest.name
            }
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <TextField
            fullWidth={true}
            hintText=""
            floatingLabelText={
              LocalizedStrings.body.services.formAbouTheRequest.email
            }
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <TextField
            fullWidth={true}
            hintText=""
            multiLine={true}
            rows={8}
            floatingLabelText={
              LocalizedStrings.body.services.formAbouTheRequest
                .infoAbotTheRequest
            }
            type="text"
            onChange={this.handleInfoChange}
            value={this.state.info}
          />
          <DatePicker hintText="Due date for the project" />
        </div>
        <div id="service-form-img" />
      </div>
    );
  }
}
