import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card } from 'material-ui/Card';

export default function whyUs(props) {
  return (
    <div id="why-us">
      <Paper zDepth={5}>
        <Card style={{ padding: '15px' }}>
          <h2>Why Us</h2>
          <Divider />
          <br />
          <p>
            We regard our strongest side to be the people that work in the
            company. That is why we try to hire the best performers from leading
            industries and assign them the critical task to serve your custom
            needs.
          </p>

          <p>
            The technological stack used in the development of your digital
            presence includes cutting edge solutions which are both scalable and
            resillient. For the case most of our products step on the shoulder
            of giants like Microsoft and Google that are considered extremelly
            reliable.
          </p>

          <p>
            Our active support is always happy to hear feedback and help you
            with something regarding your digital presence solution.
          </p>
        </Card>
      </Paper>
    </div>
  );
}
