import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper zDepth={5}>
        <Card style={{ padding: '15px' }}>
          <h2>Why Us</h2>
          <p>
            Cutting edge technlogies, Active support, Experienced developers
            from all fields, Resillient and stable systems
          </p>
          <p>
            We regard our strongest side to be the people that work in the
            company.{' '}
          </p>
        </Card>
      </Paper>
    </div>
  );
}
