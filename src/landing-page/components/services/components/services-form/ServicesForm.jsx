import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './ServicesForm.css';
import LocalizedStrings from '../../../../../LocalizedStrings';

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
            fullWidth
            hintText=""
            label={LocalizedStrings.body.services.formAbouTheRequest.name}
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
            margin="normal"
          />
          <TextField
            fullWidth
            hintText=""
            label={LocalizedStrings.body.services.formAbouTheRequest.email}
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
            margin="normal"
          />
          <TextField
            fullWidth
            hintText=""
            multiLine
            rows="8"
            label={
              LocalizedStrings.body.services.formAbouTheRequest
                .infoAbotTheRequest
            }
            type="text"
            onChange={this.handleInfoChange}
            value={this.state.info}
            margin="normal"
          />
          <p>Due date for the project</p>
          <TextField
            hintText="Due date for the project"
            type="date"
            defaultValue="2017-05-24"
            className={this.props.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div id="service-form-img" />
      </div>
    );
  }
}
