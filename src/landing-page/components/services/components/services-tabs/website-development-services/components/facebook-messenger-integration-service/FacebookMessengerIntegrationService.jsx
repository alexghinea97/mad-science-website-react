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
        <h2> Facebook messenger</h2>
        <p>
          Facebook Messenger is a messaging app and platform. Originally
          developed as Facebook Chat. Messenger is just like texting, but you
          don't have to pay for every message (it works with your data plan).
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
