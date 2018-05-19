import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LocalizedStrings from '../../../LocalizedStrings';
import './Portfolio.css';

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
              <Typography
                gutterBottom
                title={
                  LocalizedStrings.body.portfolio.bookExchangeProject.title
                }
              />
            }
          >
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardContent>
            <p>
              {LocalizedStrings.body.portfolio.bookExchangeProject.description}
            </p>
          </CardContent>
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
              <Typography
                gutterBottom
                title={LocalizedStrings.body.portfolio.madScienceProject.title}
              />
            }
          >
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardContent>
            <p>
              {LocalizedStrings.body.portfolio.madScienceProject.description}
            </p>
          </CardContent>
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
