import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { CSSTransitionGroup } from 'react-transition-group';
import Form from './Form';
import ThankYou from './ThankYou';
import './Contacts.css';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowThankYou: false
    };
  }

  toggleThankYou = () => {
    this.setState({
      shouldShowThankYou: !this.state.shouldShowThankYou
    });
  };

  render() {
    return (
      <div id="contacts">
        <Paper zDepth={5}>
          {(() => {
            if (this.state.shouldShowThankYou) {
              return (
                <CSSTransitionGroup
                  transitionName="contacts-thanks-trans"
                  transitionAppear={false}
                  transitionEnterTimeout={1000}
                  transitionEnter={true}
                  transitionLeave={false}
                >
                  <ThankYou toggleThankYou={this.toggleThankYou} />
                </CSSTransitionGroup>
              );
            } else {
              return <Form toggleThankYou={this.toggleThankYou} />;
            }
          })()}
        </Paper>
      </div>
    );
  }
}
