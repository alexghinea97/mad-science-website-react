//// @flow

import React from 'react';
import PropTypes from 'prop-types';

export default function TextInputField(props) {
  return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input
        className={'mdl-textfield__input ' + props.className}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        id={props.id}
      />
      <label
        className={'mdl-textfield__label ' + props.labelClass}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {() => {
        if (props.tooltipMessage) {
          return (
            <div className="mdl-tooltip" data-mdl-for={props.id}>
              {props.tooltipMessage}
            </div>
          );
        }
      }}
      {() => {
        if (props.errorMessage) {
          return (
            <span className="mdl-textfield__error">{props.errorMessage}</span>
          );
        }
      }}
    </div>
  );
}

TextInputField.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired
};
