import React from 'react';

import { List, ListItem } from 'material-ui/List';

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
          <ListItem primaryText="All mail" />
          <ListItem primaryText="Trash" />
          <ListItem primaryText="Spam" />
          <ListItem primaryText="Follow up" />
        </List>
      </div>
    </div>
  );
}
