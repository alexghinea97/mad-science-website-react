import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addFacebookMessengerIntegrationService } from '../../../../../../../../actions/servicesActions';
import './FacebookMessenger.css';

class FacebookMessengerIntegrationService extends React.Component {
  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addFacebookMessengerIntegrationService(true);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div id="facebook-messenger">
        <h2> Facebook pixel</h2>
        <p>
          Google analytics is a useful tool for monitoring and measuring the
          performance of your web presence. That is why we can help you with its
          integration with your web platform. You can choose from the most
          general to a more detailed implementation of the Google analytics and
          its events.
        </p>
        <img
          src="/images/messenger-integration.jpeg"
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
          onClick={this.handleAddService}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        >
          {'Add Facebook Messenger integration service'}
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFacebookMessengerIntegrationService: requestObj => {
      dispatch(addFacebookMessengerIntegrationService(requestObj));
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(FacebookMessengerIntegrationService);
