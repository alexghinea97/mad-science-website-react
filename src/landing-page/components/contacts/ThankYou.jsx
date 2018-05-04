import React from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';

import RaisedButton from 'material-ui/RaisedButton';

export default function thankYou(props) {
  return (
    <Card style={{ padding: '15px' }}>
      <h2>Thank you for contacting us</h2>

      <CardText>We will try to contact you back as soon as possible.</CardText>

      <CardActions>
        <RaisedButton
          label="Contact us again"
          primary={true}
          onClick={props.toggleThankYou}
          style={{ margin: '12px' }}
        />
      </CardActions>
    </Card>
  );
}
