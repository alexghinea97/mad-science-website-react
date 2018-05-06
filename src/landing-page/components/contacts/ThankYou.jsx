import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import LocalizedStrings from '../../../LocalizedStrings';

export default class ThankYou extends Component {
  render() {
    const actions = [
      <RaisedButton
        label={LocalizedStrings.body.contacts.thankYou.closeButton}
        primary={true}
        onClick={this.props.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          title={LocalizedStrings.body.contacts.thankYou.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          {LocalizedStrings.body.contacts.thankYou.description}
        </Dialog>
      </div>
    );
  }
}
