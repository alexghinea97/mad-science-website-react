import React from 'react';
import Paper from 'material-ui/Paper';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Portfolio.css';
import Divider from 'material-ui/Divider';

export default function portfolio(props) {
  return (
    <div id="portfolio">
      <Paper zDepth={4}>
        <Card style={{ padding: '15px' }}>
          <CardHeader
            title="Our Portfolio"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Divider />
          <br />
          <CardText expandable={true}>
            <Card className="portfolio-entity-card">
              <CardMedia
                overlay={
                  <CardTitle
                    title="Overlay title"
                    subtitle="Overlay subtitle"
                  />
                }
              >
                <img src="/images/booksexchange-logo.jpeg" alt="" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </CardText>
        </Card>
      </Paper>
    </div>
  );
}
