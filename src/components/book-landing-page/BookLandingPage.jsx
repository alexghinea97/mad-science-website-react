import React, { Component } from 'react';
import './BookLandingPage.css';
import PropTypes from 'prop-types';

export default class BookLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      authors: this.props.authorNames.join(', '),
      description: this.props.description,
      genres: this.props.genres,
      username: 'Pesho'
    };
  }
  render() {
    return (
      <div className="demo-card-wide mdl-card mdl-shadow--8dp book-landing-page-card">
        {/* Book Location */}
        <div className="book-location-landing-page">
          {this.state.genres.map(function(genre, i) {
            return (
              <div key={i} className="genre-landing-page">
                <i className="material-icons">location_on</i>
                {genre}
              </div>
            );
          })}
        </div>
        {/* Username */}
        <div className="username-landing-page">
          <div className="username">
            <i className="material-icons">person</i>
            {this.state.username}
          </div>
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text book-name-landing-page">
            {this.state.name}
          </h2>
          <div className="author-name-landing-page">{this.state.authors}</div>
        </div>
        <div className="book-genre-landing-page">
          {this.state.genres.map(function(genre, i) {
            return (
              <div key={i} className="genre-landing-page">
                <i className="material-icons">info_outline</i>
                {genre}
              </div>
            );
          })}
        </div>
        <div className="mdl-card__supporting-text book-description-landing-page">
          {this.state.description.substring(
            0,
            this.state.description.indexOf(' ', 180)
          ) + '...'}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Научи повече
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    );
  }
}

BookLandingPage.propTypes = {
  name: PropTypes.string.isRequired,
  authorNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  username: PropTypes.string.isRequired
};
