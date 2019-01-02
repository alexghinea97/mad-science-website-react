import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { addFacebookPixelIntegrationService } from '../../../../../../../../actions/servicesActions';
import './FacebookPixel.css';

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
          The Facebook pixel allows you to monitor how people interact with your
          website after viewing your Facebook ad. When someone visits your
          website and takes an action (for example, buying something), the
          Facebook pixel is triggered and reports this action. This way, you'll
          know when a customer took an action after seeing your Facebook ad.
          You'll also be able to reach this customer again by using a custom
          audience. It helps you track conversions from Facebook ads, optimize
          ads based on collected data, build targeted audiences for future ads,
          and remarket to qualified leads. You can even track customers across
          their devices so you know, for example, if people tend to see your ads
          on mobile but switch to a desktop before making a purchase—or maybe
          it’s the other way around. This information can help you refine your
          ad strategy and calculate your return on investment.
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

export default connect(() => {
  return {};
}, mapDispatchToProps)(FacebookPixelIntegrationService);
