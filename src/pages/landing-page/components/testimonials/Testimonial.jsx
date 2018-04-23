import React, { Component } from 'react';

export default function Testimonial(props) {
  return (
    <div className="demo-card-wide mdl-card mdl-shadow--8dp container">
      <div className="mdl-card__title mdl-card--border">
        <div className="image-container">
          <img className="image" src="" alt="Avatar" />
        </div>
        <h3 className="mdl-card__title-text author-testimonial">
          Chxsxsxsris Fxssdeox
        </h3>
      </div>
      <div className="mdl-layout-spacer" />
      <div className="mdl-card__supporting-text">
        <p className="content-testimonial quotation">
          There are four different syntaxes you can use with this property: the
          keyword syntax ("auto", "cover" and "contain"), the one-value syntax
          (sets the width of the image (height becomes "auto"), the two-value
          syntax (first value: width of the image, second value: height), and
          the multiple background syntax (separated with comma).
        </p>
      </div>
    </div>
  );
}
