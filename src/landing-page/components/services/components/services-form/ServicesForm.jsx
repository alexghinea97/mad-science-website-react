import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import './ServicesForm.css';
import LocalizedStrings from '../../../../../LocalizedStrings';

const styles = theme => ({
  root: {
    width: 'auto'
  }
});

class ServicesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      termsAndAgreements: false
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
    const { classes } = this.props;

    return (
      <div id="services-form">
        <h2>{LocalizedStrings.body.services.formAbouTheRequest.title}</h2>
        <div>
          <TextField
            fullWidth
            label={LocalizedStrings.body.services.formAbouTheRequest.name}
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label={LocalizedStrings.body.services.formAbouTheRequest.email}
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
            margin="normal"
          />
          <TextField
            fullWidth
            multiline
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
          <TextField
            helperText="Due date for the project"
            type="date"
            defaultValue="2017-05-24"
            className={this.props.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <Checkbox
            className={classes.root}
            checked={this.state.termsAndAgreements}
            onChange={(event, checked) =>
              this.setState({ termsAndAgreements: checked })
            }
          />
          {'I agree general terms'}
        </div>
        <div id="service-form-img" />
      </div>
    );
  }
}

ServicesForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServicesForm);
