//// @flow

import React from 'react';
import PropTypes from 'prop-types';
import './SliderInputField.css';

export default function SliderInputField(props) {
  return (
    <div className="slider-input">
      <label className="mdl-textfield__label">{props.labelString}</label>
      <br />
      <input
        className="mdl-slider mdl-js-slider"
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        tabindex={props.tabindex}
        onChange={props.handleChange}
      />
      <label className="rate-label">Много лошо</label>
      <label className="rate-label">Отлично</label>
    </div>
  );
}

SliderInputField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  tabindex: PropTypes.string
};
