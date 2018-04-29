import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export default function hiring(props) {
  return (
    <div id="hiring">
      <Paper zDepth={4} style={{ padding: '15px' }}>
        <h2>Do you want to join? </h2>
        <Divider />
        <h3>Sorry we are currently not having open positions</h3>

        <h5>Subscribe below to hear from us, when we have open positions.</h5>
      </Paper>
    </div>
  );
}
