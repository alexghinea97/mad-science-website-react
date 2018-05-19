import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import LocalizedStrings from '../../../LocalizedStrings';

export default class ThankYou extends Component {
  render() {
    const actions = [
      <Button color="primary" variant="raised" onClick={this.props.handleClose}>
        {LocalizedStrings.body.contacts.thankYou.closeButton}
      </Button>
    ];

    return (
      <div>
        <Dialog open={this.props.open} onClose={this.handleClose}>
          <DialogTitle>
            {LocalizedStrings.body.contacts.thankYou.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {LocalizedStrings.body.contacts.thankYou.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              {actions}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
