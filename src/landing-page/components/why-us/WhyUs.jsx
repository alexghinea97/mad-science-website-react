import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LocalizedStrings from '../../../LocalizedStrings';
//import './WhyUs.css';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper elevation={5}>
        <Card style={{ padding: '15px' }}>
          <h2>{LocalizedStrings.body.whyUs.title}</h2>
          <Divider />
          <Typography>
            <br />
            <h3>Our professionals:</h3>
            <p>{LocalizedStrings.body.whyUs.whyUsFirstParagraph}</p>
            <h3>Technological expertise:</h3>
            <p>{LocalizedStrings.body.whyUs.whyUsSecondParagraph}</p>
            <h3>Availability:</h3>
            <p>{LocalizedStrings.body.whyUs.whyUsThirdParagraph}</p>
          </Typography>
        </Card>
      </Paper>
    </div>
  );
}
