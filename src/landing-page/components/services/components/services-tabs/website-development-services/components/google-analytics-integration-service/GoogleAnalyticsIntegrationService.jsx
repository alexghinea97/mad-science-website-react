import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addGoogleAnalyticsIntegrationService } from '../../../../../../../../actions/servicesActions';
import './GoogleAnalytics.scss';

class GoogleAnalyticsIntegrationService extends React.Component {
  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addGoogleAnalyticsIntegrationService(true);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div id="google-analytics">
        <h2> Google analyics</h2>
        <p>
          Google analytics is a useful tool for monitoring and measuring the
          performance of your web presence. That is why we can help you with its
          integration with your web platform. If you are not so familiar with it
          we can also help you understand why it is so important in future
          communication with us.
        </p>
        <img
          src="/images/google-analytics.jpeg"
          alt=""
          width="100%"
          height="300px"
          style={{ marginBottom: '10px' }}
        />

        <Button
          fullWidth
          variant="raised"
          color="primary"
          onClick={this.handleAddService}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        >
          {'Add Google Analytics integration service'}
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addGoogleAnalyticsIntegrationService: requestObj => {
      dispatch(addGoogleAnalyticsIntegrationService(requestObj));
    }
  };
}

export default connect(
  () => {
    return {};
  },
  mapDispatchToProps
)(GoogleAnalyticsIntegrationService);
