import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export default function websiteServiceModal(props) {
  const actions = [
    <Button
      key={0}
      variant="raised"
      color="primary"
      onClick={props.handleClose}
    >
      Cancel
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
    <Dialog open={props.open} fullWidth onClick={props.handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions onClick={props.handleClose} color="primary">
        {actions}
      </DialogActions>
    </Dialog>
  );
}
