import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { addFacebookPixelIntegrationService } from '../../../../../../../../actions/servicesActions';
import './FacebookPixel.scss';

class FacebookPixelIntegrationService extends React.Component {
  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addFacebookPixelIntegrationService(true);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div id="facebook-pixel">
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
        <Button
          fullWidth
          variant="raised"
          color="primary"
          onClick={this.handleAddService}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        >
          {'Add Website development service'}
        </Button>
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

export default connect(
  () => {
    return {};
  },
  mapDispatchToProps
)(FacebookPixelIntegrationService);
