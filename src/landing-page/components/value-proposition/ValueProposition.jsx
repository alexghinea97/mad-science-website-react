import React, { Component } from 'react';
import LocalizedStrings from '../../../LocalizedStrings';
import './ValueProposition.css';
import strings from '../../../LocalizedStrings';

export default class ValueProposition extends Component {
  render() {
    return (
      <div id="value-proposition">
        <p>{LocalizedStrings.body.valueProposition.valueText1}</p>
        <p>{LocalizedStrings.body.valueProposition.valueText2}</p>
      </div>
    );
  }
}
