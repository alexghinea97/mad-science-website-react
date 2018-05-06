import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

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
        <h2>Just a little bit more and we're done...</h2>
        <div>
          <TextField
            fullWidth={true}
            hintText=""
            floatingLabelText="Name"
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <TextField
            fullWidth={true}
            hintText=""
            floatingLabelText="Email"
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <TextField
            fullWidth={true}
            hintText=""
            multiLine={true}
            rows={8}
            floatingLabelText="Additional info about the request"
            type="text"
            onChange={this.handleInfoChange}
            value={this.state.info}
          />
        </div>
        <div>
          <img src="/images/form.png" alt="" />
        </div>
      </div>
    );
  }
}
