import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class WebSiteServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <div className="row">
          <div className="column left-column" />
        </div>
        <div className="row">
          <div className="column left-column">
            <RaisedButton
              fullWidth={true}
              label="Google analytics integration"
              primary={true}
              onClick={this.handleOpen}
            />
          </div>
        </div>
        <div className="row">
          <div className="column left-column">
            <RaisedButton
              fullWidth={true}
              label="Facebook pixel integration"
              primary={true}
              onClick={this.handleOpen}
            />
          </div>
        </div>
        <div className="row">
          <div className="column left-column">
            <RaisedButton
              fullWidth={true}
              label="Email Subscription integration"
              primary={true}
              onClick={this.handleOpen}
            />
          </div>
        </div>
        <div className="row">
          <div className="column left-column">
            <RaisedButton
              fullWidth={true}
              label="Localization"
              primary={true}
              onClick={this.handleOpen}
            />
          </div>
        </div>
        <div className="row">
          <div className="column left-column">
            <RaisedButton
              fullWidth={true}
              label="Users and Authentication"
              primary={true}
              onClick={this.handleOpen}
            />
          </div>
        </div>
        <div className="row">
          <div className="column left-column">
            <RaisedButton
              fullWidth={true}
              label="Blog and blog management"
              primary={true}
              onClick={this.handleOpen}
            />
          </div>
        </div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React
          objects.
        </Dialog>
      </div>
    );
  }
}
