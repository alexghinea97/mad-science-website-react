import React, { Component } from 'react';
import './Testimonials.css';
import firstAvatar from './first-avatar.jpg';

export default class Testimonials extends Component {
  render() {
    return (
      <div id="testimonials-component" className="mdl-grid">
        <h2>Отзиви за платформата</h2>
        <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet mdl-cell--5-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone">
          <div className="demo-card-wide mdl-card mdl-shadow--8dp container">
            <div className="mdl-card__title mdl-card--border">
              <div className="image-container">
                <img className="image" src={firstAvatar} alt="Avatar" />
              </div>
              <h3 className="mdl-card__title-text author-testimonial">
                Chxsxsxsris Fxssdeox
              </h3>
            </div>
            <div className="mdl-layout-spacer" />
            <div className="mdl-card__supporting-text">
              <p className="content-testimonial quotation">
                There are four different syntaxes you can use with this
                property: the keyword syntax ("auto", "cover" and "contain"),
                the one-value syntax (sets the width of the image (height
                becomes "auto"), the two-value syntax (first value: width of the
                image, second value: height), and the multiple background syntax
                (separated with comma).
              </p>
            </div>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet mdl-cell--5-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone">
          <div className="demo-card-wide mdl-card mdl-shadow--8dp container">
            <div className="mdl-card__title mdl-card--border">
              <div className="image-container">
                <img className="image" src={firstAvatar} alt="Avatar" />
              </div>
              <h3 className="mdl-card__title-text author-testimonial">
                Chxsxsxsris Fxssdeox
              </h3>
            </div>
            <div className="mdl-layout-spacer" />
            <div className="mdl-card__supporting-text">
              <p className="content-testimonial quotation">
                There are four different syntaxes you can use with this
                property: the keyword syntax ("auto", "cover" and "contain"),
                the one-value syntax (sets the width of the image (height
                becomes "auto"), the two-value syntax (first value: width of the
                image, second value: height), and the multiple background syntax
                (separated with comma).
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
