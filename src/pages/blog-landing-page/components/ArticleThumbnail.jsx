import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ArticleThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: props.articleId,
      title: props.title,
      shortPreview: props.shortPreview
    };
  }
  render() {
    return (
      <article
        id={'article-' + this.state.articleId}
        className="demo-card-wide mdl-card mdl-shadow--16dp"
      >
        <div className="mdl-card__media mdl-color-text--grey-50">
          <h3>
            <NavLink to={'/blog/' + this.state.articleId}>
              {this.state.title}
            </NavLink>
          </h3>
        </div>
        <div className="mdl-card__supporting-text">
          {this.state.shortPreview}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Прочети повече
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </article>
    );
  }
}
