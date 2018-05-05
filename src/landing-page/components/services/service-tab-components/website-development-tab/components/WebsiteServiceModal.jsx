import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default function websiteServiceModal(props) {
  const actions = [
    <FlatButton label="Cancel" primary={true} onClick={props.handleClose} />,
    <FlatButton
      label="Add"
      primary={true}
      keyboardFocused={true}
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
    >
      {props.children}
    </Dialog>
  );
}
