import React from 'react';
import ServicesTabs from './components/services-tabs/ServicesTabs';
import ServicesForm from './components/services-form/ServicesForm';
import ServicesRequestConfirmation from './components/services-request-confirmation/ServicesRequestConfirmation';
import ServicesThankYou from './components/services-thank-you/ServicesThankYou';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Drawer from 'material-ui/Drawer';
import Button from '@material-ui/core/Button';
// import Badge from '@material-ui/core/Badge';
// import IconButton from '@material-ui/core/IconButton';
// import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
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

  handleAddService = serviceObject => {};

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
          <Button
            variant="raised"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
          >
            {'Back'}
          </Button>
        )}
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleNext}
          style={{ marginLeft: 12 }}
        >
          {stepIndex === 3 ? 'Finish' : stepIndex === 2 ? 'Confirm' : 'Next'}
        </Button>
        {(() => {
          if (stepIndex < 2) {
            // return (
            //   <Badge
            //     badgeContent={10}
            //     secondary={true}
            //     badgeStyle={{ top: 12, right: 12 }}
            //   >
            //     <IconButton onClick={this.handleToggle} tooltip="Notifications">
            //       <ActionShoppingCart />
            //     </IconButton>
            //   </Badge>
            // );
          }
        })()}
      </div>
    );
  }
  render() {
    return (
      <div id="services">
        <Paper elevation={3} style={{ padding: '15px' }}>
          <div style={{ maxWidth: '100%', margin: 'auto' }}>
            <Stepper activeStep={this.state.stepIndex} orientation="vertical">
              <Step>
                <StepLabel>Select the services you would like</StepLabel>
                <StepContent>
                  <ServicesTabs />
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Contacts and additional info</StepLabel>
                <StepContent>
                  <ServicesForm />
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Request summary</StepLabel>
                <StepContent>
                  <ServicesRequestConfirmation />
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Thank you</StepLabel>
                <StepContent>
                  <ServicesThankYou />
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
            </Stepper>
          </div>
        </Paper>
        <Drawer
          width={300}
          openSecondary={true}
          elevation={4}
          containerStyle={{ top: 90 }}
          open={this.state.open}
        >
          <h2>Hello</h2>
        </Drawer>
      </div>
    );
  }
}
