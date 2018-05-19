import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from 'material-ui/Dialog';
import LocalizedStrings from '../../../../../LocalizedStrings';

export default function websiteServiceModal(props) {
  const actions = [
    <Button color="primary" onClick={props.handleClose}>
      {LocalizedStrings.buttons.cancel}
    </Button>
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
