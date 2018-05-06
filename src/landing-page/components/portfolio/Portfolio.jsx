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
                title={
                  LocalizedStrings.body.portfolio.bookExchangeProject.title
                }
              />
            }
          >
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardText>
            {LocalizedStrings.body.portfolio.bookExchangeProject.description}
          </CardText>
          <CardActions>
            <FlatButton
              label={
                LocalizedStrings.body.portfolio.bookExchangeProject
                  .buttonForPortfolio
              }
            />
          </CardActions>
        </Card>
        <br />
        <Divider />
        <br />
        <h3>{LocalizedStrings.body.portfolio.openSourceTitle}</h3>
        <Card className="portfolio-entity-card">
          <CardMedia
            overlay={
              <CardTitle
                title={LocalizedStrings.body.portfolio.madScienceProject.title}
              />
            }
          >
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardText>
            {LocalizedStrings.body.portfolio.madScienceProject.description}
          </CardText>
          <CardActions>
            <FlatButton
              label={
                LocalizedStrings.body.portfolio.madScienceProject
                  .buttonForPortfolio
              }
            />
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}
