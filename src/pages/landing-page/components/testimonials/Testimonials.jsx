import React, { Component } from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial';

export default class Testimonials extends Component {
  render() {
    return (
      <div id="testimonials-component" className="mdl-grid">
        <h2>Отзиви за платформата</h2>
        <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet mdl-cell--5-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone">
          <Testimonial />
        </div>
        <div className="mdl-cell mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet mdl-cell--5-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone">
          <Testimonial />
        </div>
      </div>
    );
  }
}
