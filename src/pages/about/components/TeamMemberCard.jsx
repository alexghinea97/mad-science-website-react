import React from 'react';
import PropTypes from 'prop-types';

export default function TeamMemberCard(props) {
  return (
    <div className="demo-card-square mdl-card mdl-shadow--2dp">
      <div
        id={`${props.stylingId}-card`}
        className="mdl-card__title mdl-card--expand"
      />

      <div className="mdl-card__supporting-text">
        <h2 className="mdl-card__title-text">{props.personName}</h2>
        <hr />
        <h3 className="mdl-card__title-text">
          Позиция: {props.personPosition}
        </h3>
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect more-personal-info">
          Виж повече информация
        </a>
      </div>
    </div>
  );
}

TeamMemberCard.propTypes = {
  personName: PropTypes.objectOf(PropTypes.string).isRequired,
  stylingId: PropTypes.objectOf(PropTypes.string).isRequired,
  personPosition: PropTypes.objectOf(PropTypes.string).isRequired
};
