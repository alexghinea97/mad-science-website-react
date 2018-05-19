import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Button from '@material-ui/core/Button';
import './Portfolio.css';
import Divider from 'material-ui/Divider';
import LocalizedStrings from '../../../LocalizedStrings';

export default function portfolio(props) {
  return (
    <div id="portfolio">
      <Paper elevation={4} style={{ padding: '15px' }}>
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
            <p>
              {LocalizedStrings.body.portfolio.bookExchangeProject.description}
            </p>
          </CardText>
          <CardActions>
            <Button color="primary">
              {
                LocalizedStrings.body.portfolio.bookExchangeProject
                  .buttonForPortfolio
              }
            </Button>
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
            <p>
              {LocalizedStrings.body.portfolio.madScienceProject.description}
            </p>
          </CardText>
          <CardActions>
            <a
              href="https://github.com/madsciencebulgaria/mad-science-website-react"
              target="blank"
            >
              <Button color="primary">
                {
                  LocalizedStrings.body.portfolio.madScienceProject
                    .buttonForPortfolio
                }
              </Button>
            </a>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}
