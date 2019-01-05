import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import './ThankYou.css';

export default class ThankYou extends Component {
  render() {
    const actions = [
      <Button
        key={0}
        color="primary"
        variant="raised"
        onClick={this.props.handleClose}
      >
        CLOSE
      </Button>
    ];

    return (
      <div id="thank-you">
        <Dialog open={this.props.open} onClose={this.handleClose}>
          <DialogTitle>Thank you for contacting us</DialogTitle>
          <DialogContent>
            <DialogContentText>
              We will try to contact you back as soon as possible.
            </DialogContentText>
          </DialogContent>
          <DialogActions>{actions}</DialogActions>
        </Dialog>
      </div>
    );
  }
}
