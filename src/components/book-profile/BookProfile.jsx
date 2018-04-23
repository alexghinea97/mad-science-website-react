import React from 'react';
import './BookProfile.css';
import PropTypes from 'prop-types';

export default function BookProfile(props) {
  return (
    <div className="demo-card-wide mdl-card mdl-shadow--8dp book-profile-card">
      <div className="mdl-card__title mdl-card--border">
        <h2 className="mdl-card__title-text book-name-profile">{props.name}</h2>
      </div>
      <div className="mdl-card__supporting-text">
        <div className="author-name-profile">
          {props.authorNames.map(function(author, i) {
            return (
              <div key={i} className="author-profile">
                <i className="material-icons">person_pin</i>
                {author}
              </div>
            );
          })}
        </div>
        <div className="book-genre-profile">
          {props.genres.map(function(genre, i) {
            return (
              <div key={i} className="genre-profile">
                <i className="material-icons">info_outline</i>
                {genre}
              </div>
            );
          })}
        </div>
        <div className="book-location-profile">
          {props.genres.map(function(genre, i) {
            return (
              <div key={i} className="genre-profile">
                <i className="material-icons">location_on</i>
                {genre}
              </div>
            );
          })}
        </div>
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

BookProfile.propTypes = {
  name: PropTypes.string.isRequired,
  authorNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
