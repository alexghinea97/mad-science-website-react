import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import LocalizedStrings from '../../../../../LocalizedStrings';

export default function websiteServiceModal(props) {
  const actions = [
    <Button variant="raised" color="primary" onClick={props.handleClose}>
      {LocalizedStrings.buttons.cancel}
    </Button>
  ];
  // fullWidth
  //     actions={actions}
  //     modal={false}
  //     open={props.open}
  //     onRequestClose={props.handleClose}
  //     autoScrollBodyContent={true}
  //     autoDetectWindowHeight={true}

  return (
    <Dialog open={props.open} fullWidth>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          {actions}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
