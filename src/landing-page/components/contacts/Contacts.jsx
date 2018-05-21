import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import uuid from 'uuid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import LocalizedStrings from '../../../LocalizedStrings';
import firebase from '../../../firebase.js';
import ThankYou from './ThankYou';
import './Contacts.css';

const styles = theme => ({
  root: {
    paddingLeft: '10px'
  }
});

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openThankYou: false,
      email: '',
      subject: '',
      content: '',
      errorMessages: {
        emailErrorMessage: undefined,
        subjectErrorMessage: undefined,
        contentErrorMessage: undefined
      },
      termsAndAgreements: false
    };
  }

  //#region
  handleSubmitForm = eventData => {
    const stateValid = this.isStateValid();
    if (stateValid) {
      this.sendDataToDatabase();
      this.clearForm();
      this.setState({ openThankYou: true });
    }
  };

  handleCloseThankYou = () => {
    this.setState({ openThankYou: false });
  };

  clearForm = () => {
    this.setState({
      email: '',
      content: '',
      subject: ''
    });
  };

  sendDataToDatabase = () => {
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
  };

  isStateValid() {
    let stateErrorMessages = { ...this.state.errorMessages };
    let validContent = this.isValidContent(stateErrorMessages);
    let validEmail = this.isValidEmail(stateErrorMessages);
    let validSubject = this.isValidSubject(stateErrorMessages);

    if (validContent && validEmail && validSubject) {
      return true;
    } else {
      this.setState({
        errorMessages: stateErrorMessages
      });

      return false;
    }
  }

  isValidEmail(stateErrorMessages) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.state.email.match(emailRegex)) {
      stateErrorMessages.emailErrorMessage = 'Email does not match';

      return false;
    }

    stateErrorMessages.emailErrorMessage = undefined;
    return true;
  }

  isValidSubject(stateErrorMessages) {
    if (this.state.subject === '') {
      stateErrorMessages.subjectErrorMessage = 'Subject does not match';

      return false;
    }

    stateErrorMessages.subjectErrorMessage = undefined;
    return true;
  }

  isValidContent(stateErrorMessages) {
    if (this.state.content === '') {
      stateErrorMessages.contentErrorMessage = 'Content is required';

      return false;
    }

    stateErrorMessages.contentErrorMessage = undefined;
    return true;
  }

  handleContentChange = eventData => {
    this.setState({
      content: eventData.target.value
    });
  };

  handleEmailChange = eventData => {
    this.setState({
      email: eventData.target.value
    });
  };

  handleSubjectChange = eventData => {
    this.setState({
      subject: eventData.target.value
    });
  };

  //#endregion

  render() {
    const { classes } = this.props;

    return (
      <div id="contacts">
        <Paper elevation={5}>
          <Card style={{ padding: '15px' }}>
            <h2>{LocalizedStrings.body.contacts.title}</h2>
            <Divider />
            <CardContent>
              <p>{LocalizedStrings.body.contacts.contactsInfo}</p>
            </CardContent>
            <CardActions>
              <a
                target="blank"
                href="https://www.facebook.com/Mad-Science-Ltd-909426102558618/"
                className="facebook"
              >
                <i className="fa fa-facebook fa-fw" />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/company/mad-science-bulgaria/"
                className="linkedin"
              >
                <i className="fa fa-linkedin fa-fw" />
              </a>
              <a
                href="mailto:mad.science.bulgaria@gmail.com?Subject=Hello%20again"
                target="_top"
                className="mail"
              >
                <i className="fa fa-envelope fa-fw" />
              </a>
              <div
                className="fb-send"
                data-href="https://developers.facebook.com/docs/plugins/"
              />
            </CardActions>

            <CardContent>
              <TextField
                value={this.state.email}
                type="email"
                onChange={this.handleEmailChange}
                label={LocalizedStrings.body.contacts.form.email}
                helperText={LocalizedStrings.body.contacts.form.email}
                margin="normal"
              />

              {/* <TextField
                hintText={LocalizedStrings.body.contacts.form.email}
                floatingLabelText={LocalizedStrings.body.contacts.form.email}
                type="email"
                onChange={this.handleEmailChange}
                errorText={this.state.errorMessages.emailErrorMessage}
                value={this.state.email}
              /> */}

              <TextField
                fullWidth
                value={this.state.subject}
                type="text"
                onChange={this.handleSubjectChange}
                label={LocalizedStrings.body.contacts.form.subject}
                helperText={
                  LocalizedStrings.body.contacts.form.subjectFloatingLabel
                }
                margin="normal"
              />
              {/* <TextField
                fullWidth={true}
                hintText={
                  LocalizedStrings.body.contacts.form.subjectFloatingLabel
                }
                floatingLabelText={LocalizedStrings.body.contacts.form.subject}
                type="text"
                onChange={this.handleSubjectChange}
                errorText={this.state.errorMessages.subjectErrorMessage}
                value={this.state.subject}
              /> */}

              <TextField
                fullWidth
                multiline
                rowsMax="5"
                value={this.state.content}
                type="text"
                onChange={this.handleContentChange}
                label={LocalizedStrings.body.contacts.form.content}
                helperText={
                  LocalizedStrings.body.contacts.form.contentFloatingLabel
                }
                margin="normal"
              />

              {/* <TextField
                fullWidth={true}
                hintText={
                  LocalizedStrings.body.contacts.form.contentFloatingLabel
                }
                floatingLabelText={LocalizedStrings.body.contacts.form.content}
                type="text"
                multiLine={true}
                rows={5}
                value={this.state.content}
                errorText={this.state.errorMessages.contentErrorMessage}
                onChange={this.handleContentChange}
              /> */}
            </CardContent>
            <Checkbox
              className={classes.root}
              checked={this.state.termsAndAgreements}
              onChange={(event, checked) =>
                this.setState({ termsAndAgreements: checked })
              }
            />
            {'I agree general terms'}
            <br />
            <Button
              variant="raised"
              color="primary"
              onClick={this.handleSubmitForm}
              style={{ margin: '12px' }}
            >
              {LocalizedStrings.body.contacts.contactsButton}
            </Button>
          </Card>
        </Paper>
        <ThankYou
          handleClose={this.handleCloseThankYou}
          open={this.state.openThankYou}
        />
      </div>
    );
  }
}
Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacts);
