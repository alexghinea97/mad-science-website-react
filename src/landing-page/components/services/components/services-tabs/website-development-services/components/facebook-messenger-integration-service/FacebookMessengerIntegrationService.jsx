import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { addFacebookMessengerIntegrationService } from '../../../../../../../../actions/servicesActions';

class FacebookMessengerIntegrationService extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addFacebookMessengerIntegrationService(true);
  };

  render() {
    return (
      <div>
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
        <RaisedButton
          fullWidth={true}
          primary={true}
          onClick={this.handleAddService}
          label={'Add Facebook Messenger integration service'}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        />
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
