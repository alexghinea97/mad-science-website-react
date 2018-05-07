import React from 'react';
import ServicesTabs from './components/services-tabs/ServicesTabs';
import ServicesForm from './components/services-form/ServicesForm';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import LocalizedStrings from '../../../LocalizedStrings';
import './Services.css';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      open: false
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

  handleToggle = () => this.setState({ open: !this.state.open });

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        {step > 0 && (
          <FlatButton
            label={LocalizedStrings.buttons.back}
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
        <RaisedButton
          label={
            stepIndex === 3
              ? LocalizedStrings.buttons.finish
              : LocalizedStrings.buttons.next
          }
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginLeft: 12 }}
        />
        {(() => {
          if (stepIndex < 2) {
            return (
              <Badge
                badgeContent={10}
                secondary={true}
                badgeStyle={{ top: 12, right: 12 }}
              >
                <IconButton onClick={this.handleToggle} tooltip="Notifications">
                  <ActionShoppingCart />
                </IconButton>
              </Badge>
            );
          }
        })()}
      </div>
    );
  }
  render() {
    return (
      <div id="services">
        <Paper zDepth={3} style={{ padding: '15px' }}>
          <div style={{ maxWidth: '100%', margin: 'auto' }}>
            <Stepper activeStep={this.state.stepIndex} orientation="vertical">
              <Step>
                <StepLabel>
                  {LocalizedStrings.body.services.steps.firstStep}
                </StepLabel>
                <StepContent>
                  <ServicesTabs />
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>
                  {LocalizedStrings.body.services.steps.secondStep}
                </StepLabel>
                <StepContent>
                  <ServicesForm />
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>
                  {LocalizedStrings.body.services.steps.thirdStep}
                </StepLabel>
                <StepContent>
                  <ServicesForm />
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>
                  {LocalizedStrings.body.services.steps.fourthStep}
                </StepLabel>
                <StepContent>{this.renderStepActions(2)}</StepContent>
              </Step>
            </Stepper>
          </div>
        </Paper>
        <Drawer
          width={300}
          openSecondary={true}
          zDepth={4}
          containerStyle={{ top: 90 }}
          open={this.state.open}
        >
          <h2>Hello</h2>
        </Drawer>
      </div>
    );
  }
}
