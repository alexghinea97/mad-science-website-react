import React from 'react';
import PropTypes from 'prop-types';

export default function DropdownInputField(props) {
  return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height">
      <input
        type={props.type}
        value={props.value}
        className="mdl-textfield__input"
        id={props.id}
        readOnly
      />
      <input type="hidden" value={props.value} name={props.name} />
      <i className="mdl-icon-toggle__label material-icons">
        keyboard_arrow_down
      </i>
      <label htmlFor={props.id} className="mdl-textfield__label">
        {props.label}
      </label>
      <ul
        htmlFor={props.id}
        className="mdl-menu mdl-menu--bottom-left mdl-js-menu"
      >
        {props.values.map(function(value, i) {
          return (
            <li key={i} className="mdl-menu__item" onClick={props.handleChange}>
              {value}
            </li>
          );
        }, this)}
      </ul>
    </div>
  );
}

DropdownInputField.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string)
};
