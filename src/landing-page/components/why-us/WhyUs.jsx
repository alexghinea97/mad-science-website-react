import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card, CardText } from 'material-ui/Card';
import LocalizedStrings from '../../../LocalizedStrings';
import './WhyUs.css';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper zDepth={5}>
        <Card style={{ padding: '15px' }}>
          <h2>{LocalizedStrings.body.whyUs.title}</h2>
          <Divider />
          <CardText>
            <br />
            <h3>Our professionals:</h3>
            <p>{LocalizedStrings.body.whyUs.whyUsFirstParagraph}</p>
            <h3>Technological expertise:</h3>
            <p>{LocalizedStrings.body.whyUs.whyUsSecondParagraph}</p>
            <h3>Availability:</h3>
            <p>{LocalizedStrings.body.whyUs.whyUsThirdParagraph}</p>
          </CardText>
        </Card>
      </Paper>
    </div>
  );
}
