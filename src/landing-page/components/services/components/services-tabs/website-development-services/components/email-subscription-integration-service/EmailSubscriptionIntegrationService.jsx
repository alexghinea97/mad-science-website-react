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
        <h2> Email subscritpion</h2>
        <p>
          Email subscription allows users not to miss the updates and important
          notifications from a website or a blog by subscribing to the
          newsletter. The only thing needed is an email address. Once a user
          fills in the subscription form on a website, a confirmation email is
          sent to this email address to get the user to double opt-in. After
          this, a user’s email address is added to the website’s mailing list.
          As a result, a customer starts to receive automated emails.
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
