import React from 'react';
import Paper from 'material-ui/Paper';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Portfolio.css';
import Divider from 'material-ui/Divider';
import LocalizedStrings from '../../../LocalizedStrings';

export default function portfolio(props) {
  return (
    <div id="portfolio">
      <Paper zDepth={4} style={{ padding: '15px' }}>
        <h2>{LocalizedStrings.body.portfolio.title}</h2>
        <Divider />
        <br />
        <Card className="portfolio-entity-card">
          <CardMedia
            overlay={
              <CardTitle
                title={LocalizedStrings.body.portfolio.project.title}
              />
            }
          >
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardText>
            {LocalizedStrings.body.portfolio.project.description}
          </CardText>
          <CardActions>
            <FlatButton
              label={LocalizedStrings.body.portfolio.project.buttonForPortfolio}
            />
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}
