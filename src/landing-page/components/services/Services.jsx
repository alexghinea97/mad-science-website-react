import React from 'react';
import Paper from 'material-ui/Paper';

import LocalizedStrings from '../../../LocalizedStrings';

import ServiceTabs from './components/service-tabs/ServiceTabs';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import './Services.css';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0
    };
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }
  render() {
    return (
      <div id="services">
        <Paper zDepth={3} style={{ padding: '15px' }}>
          <h2>{LocalizedStrings.body.services.title}</h2>
          <div style={{ maxWidth: '100%', margin: 'auto' }}>
            <Stepper activeStep={this.state.stepIndex} orientation="vertical">
              <Step>
                <StepLabel>Select campaign settings</StepLabel>
                <StepContent>
                  <ServiceTabs />
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Create an ad group</StepLabel>
                <StepContent>{this.renderStepActions(1)}</StepContent>
              </Step>
              <Step>
                <StepLabel>Create an ad</StepLabel>
                <StepContent>{this.renderStepActions(2)}</StepContent>
              </Step>
            </Stepper>
            {this.state.finished && (
              <p style={{ margin: '20px 0', textAlign: 'center' }}>
                <a
                  href="jsx-a11y/href-no-hash"
                  onClick={event => {
                    event.preventDefault();
                    this.setState({ stepIndex: 0, finished: false });
                  }}
                >
                  Click here
                </a>{' '}
                to reset the example.
              </p>
            )}
          </div>
        </Paper>
      </div>
    );
  }
}
