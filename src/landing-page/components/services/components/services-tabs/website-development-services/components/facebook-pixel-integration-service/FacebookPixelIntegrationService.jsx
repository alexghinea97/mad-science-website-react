import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { addFacebookPixelIntegrationService } from '../../../../../../../../actions/servicesActions';
import { connect } from 'react-redux';

class FacebookPixelIntegrationService extends React.Component {
  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addFacebookPixelIntegrationService(true);
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
          src="/images/facebook-pixel.jpg"
          alt=""
          width="100%"
          height="500px"
          style={{ marginBottom: '10px' }}
        />
        <RaisedButton
          fullWidth={true}
          primary={true}
          onClick={this.handleAddService}
          label={'Add Website development service'}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addFacebookPixelIntegrationService: requestObj => {
      dispatch(addFacebookPixelIntegrationService(requestObj));
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(FacebookPixelIntegrationService);