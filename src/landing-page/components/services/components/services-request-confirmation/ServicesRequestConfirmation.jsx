import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ServicesRequestConfirmation.scss';

export default function servicesRequestConfirmation(props) {
  return (
    <div id="request-confirmation">
      <h2>Request summary </h2>
      <div>
        <h5>Personal info and notes: </h5>
      </div>
      <div>
        <h5>Requested services:</h5>
        <List>
          <ListItem button>
            <ListItemText primary="All mail" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Follow up" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
