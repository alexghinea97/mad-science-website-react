import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { addEmailSubscriptionIntegrationService } from '../../../../../../../../actions/servicesActions';
import './EmailSubscription.css';

class EmailSubscriptionIntegrationService extends React.Component {
  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addEmailSubscriptionIntegrationService(true);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div id="email-subscription">
        <h2> Email Subscritpion</h2>
        <p>
          Google analytics is a useful tool for monitoring and measuring the
          performance of your web presence. That is why we can help you with its
          integration with your web platform. You can choose from the most
          general to a more detailed implementation of the Google analytics and
          its events.
        </p>
        <img
          src="/images/email-subscription.jpeg"
          alt=""
          width="100%"
          height="500px"
          style={{ marginBottom: '10px' }}
        />
        <p>
          Please choose on of the following options for the integration of
          google analytics:{' '}
        </p>
        <Button
          fullWidth
          variant="raised"
          color="primary"
          style={{ marginBottom: '20px', marginTop: '20px' }}
          onClick={this.handleAddService}
        >
          {'Add Website development service'}
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addEmailSubscriptionIntegrationService: requestInfoObj => {
      dispatch(addEmailSubscriptionIntegrationService(requestInfoObj));
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(EmailSubscriptionIntegrationService);
