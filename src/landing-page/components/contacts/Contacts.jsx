import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import Form from './Form';
import ThankYou from './ThankYou';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowThankYou: false
    };

    this.toggleThankYou = this.toggleThankYou.bind(this);
  }

  toggleThankYou() {
    this.setState({
      shouldShowThankYou: !this.state.shouldShowThankYou
    });
  }

  render() {
    return (
      <div id="contacts">
        <Paper zDepth={5}>
          {(() => {
            if (this.state.shouldShowThankYou) {
              return <ThankYou toggleThankYou={this.toggleThankYou} />;
            } else {
              return <Form toggleThankYou={this.toggleThankYou} />;
            }
          })()}
        </Paper>
      </div>
    );
  }
}
