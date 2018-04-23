//// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox(props) {
  return (
    <label
      className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
      htmlFor={props.id}
    >
      <input type={props.type} id={props.id} className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">{props.checkboxMessage}</span>
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  checkboxMessage: PropTypes.string.isRequired
};
