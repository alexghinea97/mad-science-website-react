import React, { Component } from 'react';

export default class ArticleComment extends Component {
  render() {
    return (
      <div className="comment mdl-color-text--grey-700">
        <header className="comment__header">
          <img
            src="/images/team-members/bojo.jpg"
            className="comment__avatar"
            alt="avatar of person who wrote comment"
          />
          <div className="comment__author">
            <strong>James Splayd</strong>
            <span>2 days ago</span>
          </div>
        </header>
        <div className="comment__text">
          In in culpa nulla elit esse. Ex cillum enim aliquip sit sit ullamco ex
          eiusmod fugiat. Cupidatat ad minim officia mollit laborum magna dolor
          tempor cupidatat mollit. Est velit sit ad aliqua ullamco laborum
          excepteur dolore proident incididunt in labore elit.
        </div>
        <nav className="comment__actions">
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
            <i className="material-icons" role="presentation">
              thumb_up
            </i>
            <span className="visuallyhidden">like comment</span>
          </button>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
            <i className="material-icons" role="presentation">
              thumb_down
            </i>
            <span className="visuallyhidden">dislike comment</span>
          </button>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
            <i className="material-icons" role="presentation">
              share
            </i>
            <span className="visuallyhidden">share comment</span>
          </button>
        </nav>
      </div>
    );
  }
}
