import React, { Component } from 'react';
import ArticleThumbnail from './ArticleThumbnail';
import Pagination from '../../../components/pagination/Pagination';

export default class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: 'Some title of the article',
          articleId: 1,
          shortPreview: 'Consequat sint et commodo et nostrud.'
        },
        {
          title: 'Some another fancy article',
          articleId: 2,
          shortPreview:
            'Velit non voluptate eu nisi laborum laborum eiusmod laborum mollit amet proident.In mollit do qui culpa ex veniam amet irure non dolor.Consequat sint et commodo et nostrud.'
        },
        {
          title: 'More code needed',
          articleId: 3,
          shortPreview:
            'Eiusmod sit cupidatat sunt ad qui esse sunt anim.Consequat sint et commodo et nostrud.'
        },
        {
          title: 'Get over here',
          articleId: 4,
          shortPreview: 'Now we fight for the throne'
        }
      ]
    };
  }

  getArticles() {
    let articles = [];
    this.state.articles.forEach(element => {
      articles.push(new ArticleThumbnail(element).render());
    });

    return articles;
  }

  render() {
    const articles = this.getArticles();
    return (
      <div id="articles-list">
        <h1>Блог</h1>
        <div className="mdl-grid">
          <div className="mdl-cell--3-offset-desktop" />
          <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            {articles}
          </div>
          <div className="mdl-cell--3-offset" />
        </div>
        <Pagination {...{ currentPage: 13, maxPages: 20 }} />
      </div>
    );
  }
}
