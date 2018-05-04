import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Contacts extends Component {
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

  handleSubmitForm(eventData) {}

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
      <div id="contacts">
        <Paper zDepth={5}>
          <Card style={{ padding: '15px' }}>
            <h2>Contacts</h2>
            <Divider />
            <CardText>
              Need More information? You can contact us here or in one of our
              other channels
            </CardText>
            <CardActions>
              <a href="" className="facebook">
                <i className="fa fa-facebook fa-fw" />
              </a>
              <a href="" className="linkedin">
                <i className="fa fa-linkedin fa-fw" />
              </a>
            </CardActions>
            <CardText>
              <TextField
                hintText="Enter your email"
                floatingLabelText="Your email"
                type="email"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
              <TextField
                fullWidth={true}
                hintText="Enter the reason for which you are contacting us"
                floatingLabelText="Subject"
                type="text"
                onChange={this.handleSubjectChange}
                value={this.state.subject}
              />
              <TextField
                fullWidth={true}
                hintText="Ask us anything or simply share your thoughts"
                floatingLabelText="Email content  "
                type="text"
                multiLine={true}
                rows={5}
              />
            </CardText>
            <RaisedButton
              label="Submit"
              primary={true}
              style={{ margin: '12px' }}
            />
          </Card>
        </Paper>
      </div>
    );
  }
}
