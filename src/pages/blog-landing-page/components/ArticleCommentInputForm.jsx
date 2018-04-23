import React, { Component } from 'react';

export default class ArticleCommentInputForm extends Component {
  render() {
    return (
      <form>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <textarea rows="1" className="mdl-textfield__input" id="comment" />
          <label htmlFor="comment" className="mdl-textfield__label">
            Join the discussion
          </label>
          <button className="mdl-button">
            <i className="material-icons">comment</i>
          </button>
        </div>
      </form>
    );
  }
}
