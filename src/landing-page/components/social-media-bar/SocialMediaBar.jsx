import React, { Component } from 'react';
import './SocialMediaBar.scss';

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div className="icon-bar">
        <a
          target="blank"
          href="https://www.facebook.com/Mad-Science-Ltd-909426102558618/"
          className="facebook"
        >
          <i className="fa fa-facebook fa-fw" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/company/mad-science-bulgaria/"
          className="linkedin"
        >
          <i className="fa fa-linkedin fa-fw" />
        </a>
        <a
          href="mailto:mad.science.bulgaria@gmail.com?Subject=Hello%20again"
          target="_top"
          className="mail"
        >
          <i className="fa fa-envelope fa-fw" />
        </a>
      </div>
    );
  }
}
