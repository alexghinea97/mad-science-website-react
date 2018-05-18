import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LocalizedStrings from '../../../../../LocalizedStrings';

export default function websiteServiceModal(props) {
  const actions = [
    <FlatButton
      label={LocalizedStrings.buttons.cancel}
      primary={true}
      onClick={props.handleClose}
    />
  ];

  return (
    <Dialog
      title={props.title}
      actions={actions}
      modal={false}
      open={props.open}
      onRequestClose={props.handleClose}
      autoScrollBodyContent={true}
      autoDetectWindowHeight={true}
    >
      {props.children}
    </Dialog>
  );
}
