import React from 'react';
import PropTypes from 'prop-types';

export default function Textarea(props) {
  return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded">
      <textarea
        className="mdl-textfield__input"
        type={props.type}
        rows={props.rows}
        value={props.value}
        onChange={props.handleChange}
        id={props.id}
      />
      <label className="mdl-textfield__label" htmlFor={props.id}>
        {props.textareaMessage}
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
    </div>
  );
}

Textarea.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  textareaMessage: PropTypes.string.isRequired
};
