import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card } from 'material-ui/Card';
import LocalizedStrings from '../../../LocalizedStrings';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper zDepth={5}>
        <Card style={{ padding: '15px' }}>
          <h2>{LocalizedStrings.body.whyUs.title}</h2>
          <Divider />
          <br />
          <p>{LocalizedStrings.body.whyUs.whyUsFirstParagraph}</p>
          <p>{LocalizedStrings.body.whyUs.whyUsSecondParagraph}</p>
          <p>{LocalizedStrings.body.whyUs.whyUsThirdParagraph}</p>
        </Card>
      </Paper>
    </div>
  );
}
