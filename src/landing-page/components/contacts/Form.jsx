import React, { Component } from 'react';
import uuid from 'uuid';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import LocalizedStrings from '../../../LocalizedStrings';
import firebase from '../../../firebase.js';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      content: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(eventData) {
    const state = this.getDataState();
    if (state.isValid) {
      this.sendDataToDatabase();
      this.clearForm();
      this.props.toggleThankYou();
    } else {
      state.errors.forEach(dataError => {
        //Show a snackbar
      });
    }
  }

  clearForm() {
    this.setState({
      email: '',
      content: '',
      subject: ''
    });
  }

  handleRequestClose(eventData) {
    console.dir(eventData);
  }

  sendDataToDatabase() {
    firebase
      .database()
      .ref('/contacts/' + uuid.v4())
      .set(
        {
          email: this.state.email,
          subject: this.state.subject,
          content: this.state.content
        },
        err => {
          console.dir(err);
        }
      );
  }

  getDataState() {
    const state = {
      isValid: true,
      errors: []
    };

    return state;
  }

  handleContentChange(eventData) {
    this.setState({
      content: eventData.target.value
    });
  }

  handleEmailChange(eventData) {
    this.setState({
      email: eventData.target.value
    });
  }

  handleSubjectChange(eventData) {
    this.setState({
      subject: eventData.target.value
    });
  }

  render() {
    return (
      <Card style={{ padding: '15px' }}>
        <h2>{LocalizedStrings.body.contacts.title}</h2>
        <Divider />
        <CardText>{LocalizedStrings.body.contacts.contactsInfo}</CardText>
        <CardActions>
          <a href="" className="facebook">
            <i className="fa fa-facebook fa-fw" />
          </a>
          <a href="" className="linkedin">
            <i className="fa fa-linkedin fa-fw" />
          </a>
          <div
            className="fb-send"
            data-href="https://developers.facebook.com/docs/plugins/"
          />
        </CardActions>

        <CardText>
          <TextField
            hintText={LocalizedStrings.body.contacts.form.email}
            floatingLabelText={LocalizedStrings.body.contacts.form.email}
            type="email"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
          <TextField
            fullWidth={true}
            hintText={LocalizedStrings.body.contacts.form.subjectFloatingLabel}
            floatingLabelText={LocalizedStrings.body.contacts.form.subject}
            type="text"
            onChange={this.handleSubjectChange}
            value={this.state.subject}
          />
          <TextField
            fullWidth={true}
            hintText={LocalizedStrings.body.contacts.form.contentFloatingLabel}
            floatingLabelText={LocalizedStrings.body.contacts.form.content}
            type="text"
            multiLine={true}
            rows={5}
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </CardText>
        <RaisedButton
          label={LocalizedStrings.body.contacts.contactsButton}
          primary={true}
          onClick={this.handleSubmitForm}
          style={{ margin: '12px' }}
        />
      </Card>
    );
  }
}
