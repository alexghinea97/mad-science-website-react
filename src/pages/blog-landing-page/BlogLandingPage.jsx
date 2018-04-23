import React, { Component } from 'react';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import './BlogLandingPage.css';
import { Route } from 'react-router-dom';

export default class BlogLandingPage extends Component {
  render() {
    return (
      <div id="blog-page">
        <Route exact path="/blog" component={ArticlesList} />
        <Route exact path="/blog/:id" component={Article} />
      </div>
    );
  }
}
