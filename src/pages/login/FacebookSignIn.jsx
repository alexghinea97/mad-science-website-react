import React from 'react';
import PropTypes from 'prop-types';

export default class FacebookSignIn extends React.Component {
  componentWillMount() {
    this.initFacebookSdk();
    this.loadFacebookSdk();
  }

  onAuthStatusChanged() {
    window.FB.Event.subscribe(
      'auth.statusChange',
      this.props.onAuthStatusChanged
    );
  }

  initFacebookSdk() {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: this.props.appId,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
      });
      window.FB.AppEvents.logPageView();
      this.onAuthStatusChanged();
    };
  }

  loadFacebookSdk() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=129825720987577&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  render() {
    return (
      <div
        className="fb-login-button"
        data-max-rows="2"
        data-size="large"
        data-button-type="continue_with"
        data-show-faces="true"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      />
    );
  }
}

FacebookSignIn.propTypes = {
  appId: PropTypes.string.isRequired,
  onAuthStatusChanged: PropTypes.func.isRequired
};
