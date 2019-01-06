import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import './Portfolio.scss';

const styles = {
  media: {
    padding: '30%'
  }
};

function Portfolio(props) {
  const { classes } = props;
  return (
    <div id="portfolio">
      <Paper elevation={4} style={{ padding: '15px' }}>
        <h2>Our Portfolio</h2>
        <Divider />
        <br />
        <Card className="portfolio-entity-card">
          <CardMedia
            className={classes.media}
            image="/images/booksexchange-logo.jpeg"
          />
          <CardContent>
            <h4>Book Exchange</h4>
            <Typography component="p">
              Knowledge is something important for everyone. Our team from Mad
              Science create a platform which helps us to exchange books all
              over Bulgaria. We sympathizing to have an accessible education no
              matter the age. Every person has an opportunity to give an opinion
              for a book which owns. The book could be exchanged with someone
              who wants to read it.
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">LEARN MORE</Button>
          </CardActions>
        </Card>
        <br />
        <Divider />
        <br />
        <h3>Open-source projects</h3>
        <Card className="portfolio-entity-card">
          <CardMedia
            className={classes.media}
            image="/images/booksexchange-logo.jpeg"
          />
          <CardContent>
            <h4>Mad Science</h4>
            <Typography component="p">
              The official website of Mad Science is an open-source project. The
              source code can be found in GitHub. For carrying out the project
              we used JavaScript(JS) and one of the most popular JavaScript
              libraries – React. For the design philosophy we step upon the
              shoulders of Material Design by Google. More information can be
              found on GitHub in the readme file.
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://github.com/madsciencebulgaria/mad-science-website-react"
              target="blank"
            >
              <Button color="primary">SOURCE IN GITHUB</Button>
            </a>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
