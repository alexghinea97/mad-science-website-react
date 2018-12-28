import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
//import './WhyUs.css';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper elevation={5}>
        <Card style={{ padding: '15px' }}>
          <h2>Why Us</h2>
          <Divider />
          <CardContent>
            <br />
            <h3>Our professionals:</h3>
            <Typography component="p">
              We regard our strongest side to be the people that work in the
              company. That is why we try to hire the best performers from
              leading industries and assign them the critical task to serve your
              custom needs.
            </Typography>
            <h3>Technological expertise:</h3>
            <Typography component="p">
              The technological stack used in the development of your digital
              presence includes cutting-edge solutions which are both scalable
              and resilient. For the case, most of our products step on the
              shoulder of giants like Microsoft and Google that are considered
              extremely reliable.
            </Typography>
            <h3>Availability:</h3>
            <Typography component="p">
              Our active support is always happy to hear feedback and help you
              with something regarding your digital presence solution.
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
