import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './NotFound.css';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: '#FCFCFC' }}
        id="not-found-page"
        className="demo-layout-transparent mdl-layout mdl-js-layout"
      >
        <img
          src="/images/not-found.jpg"
          style={{
            width: '50%',
            height: '60%',
            display: 'block',
            margin: 'auto',
            position: 'fixed',
            top: '40%'
          }}
          alt="A cat looking thowards a Not found text."
        />
        {/* <main className="mdl-layout__content" /> */}
        <h2>Oops ...this page is not found</h2>
        <Button
          fullWidth
          href="/"
          variant="raised"
          color="primary"
          onClick={this.handleAddService}
          style={{ marginLeft: '35%', marginTop: '40px', width: '30%' }}
        >
          {'Go back'}
        </Button>
      </div>
    );
  }
}
