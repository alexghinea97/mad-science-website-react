import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ServicesRequestConfirmation.css';

export default function servicesRequestConfirmation(props) {
  return (
    <div id="request-confirmation">
      <h2>Request summary </h2>
      <div>
        <h3>Personal info and notes: </h3>
      </div>
      <div>
        <h3>Requested services:</h3>
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
