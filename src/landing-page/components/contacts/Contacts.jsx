import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

export default function contacts(props) {
  return (
    <div id="contacts">
      <Paper zDepth={5}>
        <Card style={{ padding: '15px' }}>
          <CardHeader
            title="Contacts"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Divider />
          <CardText expandable={true}>
            <CardText>
              Need More information? You can contact us here or in one of our
              other channels
            </CardText>
            <CardActions>
              <a href="" className="facebook">
                <i className="fa fa-facebook fa-fw" />
              </a>
              <a href="" className="linkedin">
                <i className="fa fa-linkedin fa-fw" />
              </a>
            </CardActions>
            <CardText>
              <TextField
                hintText="Enter your email"
                floatingLabelText="Your email"
                type="email"
              />
              <TextField
                fullWidth={true}
                hintText="Enter the reason for which you are contacting us"
                floatingLabelText="Subject"
                type="text"
              />
              <TextField
                fullWidth={true}
                hintText="Ask us anything or simply share your thoughts"
                floatingLabelText="Email content  "
                type="text"
                multiLine={true}
                rows={5}
              />
            </CardText>
          </CardText>
        </Card>
      </Paper>
    </div>
  );
}
