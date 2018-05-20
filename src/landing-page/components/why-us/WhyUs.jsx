import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LocalizedStrings from '../../../LocalizedStrings';
import { CardContent } from '@material-ui/core';
//import './WhyUs.css';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper elevation={5}>
        <Card style={{ padding: '15px' }}>
          <h2>{LocalizedStrings.body.whyUs.title}</h2>
          <Divider />
          <CardContent>
            <br />
            <h3>Our professionals:</h3>
            <Typography component="p">
              {LocalizedStrings.body.whyUs.whyUsFirstParagraph}
            </Typography>
            <h3>Technological expertise:</h3>
            <Typography component="p">
              {LocalizedStrings.body.whyUs.whyUsSecondParagraph}
            </Typography>
            <h3>Availability:</h3>
            <Typography component="p">
              {LocalizedStrings.body.whyUs.whyUsThirdParagraph}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
