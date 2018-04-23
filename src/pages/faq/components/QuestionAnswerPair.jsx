import React, { Component } from 'react';

export default class QuestionAnswerPair extends Component {
  render() {
    return (
      <li className="mdl-list__item mdl-list__item--three-line">
        <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-avatar">person</i>
          <h2>{this.props.questionTitle}</h2>
        </span>
        <span className="mdl-list__item-text-body">
          <span className="mdl-list__item-text-body">{this.props.answer}</span>
        </span>
      </li>
    );
  }
}
