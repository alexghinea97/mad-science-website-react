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
          <CardMedia overlay={<CardTitle title="Книга за Книга" />}>
            <img src="/images/booksexchange-logo.jpeg" alt="" />
          </CardMedia>
          <CardText>
            Знанието е нещо важно за всички ни. Ние от екипа на Mad Science
            създадохме платформа, която ни помага да разменяме книги с цяла
            България. Съпричастни сме към по-достъпното образование, без
            значение от възрастта. Всеки има възможността да напише нещо повече
            за конкретна книга, която притежава и да даде своето мнение за нея.
            Книгата бива разменяна, с някого, когото иска да я прочете и да
            извлече максимално много от нея.
          </CardText>
          <CardActions>
            <FlatButton label="Научи повече" />
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
}
