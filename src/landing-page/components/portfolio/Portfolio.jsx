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

export default function portfolio(props) {
  return (
    <div id="portfolio">
      <Paper zDepth={4} style={{ padding: '15px' }}>
        <h2>Our Portfolio</h2>
        <Divider />
        <br />
        <Card className="portfolio-entity-card">
          <CardMedia overlay={<CardTitle title="Book Exchange" />}>
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardText>
            Knowledge is something important for everyone. Our team from Mad
            Science create a platform which helps us to exchange books all over
            Bulgaria. We sympathizing to have an accessible education no matter
            the age. Every person has an opportunity to give an opinion for a
            book which owns. The book could be exchanged with someone who wants
            to read it.
          </CardText>
          <CardActions>
            <FlatButton label="LEARN MORE" />
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}
