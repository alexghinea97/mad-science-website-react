export const ADD_WEBSITE_DEV_SERVICE = 'ADD_WEBSITE_DEV_SERVICE';
export function addWebsiteDevService(requestInfoObj) {
  return {
    type: ADD_WEBSITE_DEV_SERVICE,
    requestInfo: requestInfoObj
  };
}

export const ADD_EMAIL_SUBSCRIPTION_INTEGRATION_SERVICE =
  'ADD_EMAIL_SUBSCRIPTION_INTEGRATION_SERVICE';
export function addEmailSubscriptionIntegrationService(requestInfoObj) {
  return {
    type: ADD_EMAIL_SUBSCRIPTION_INTEGRATION_SERVICE,
    requestInfo: requestInfoObj
  };
}

export const ADD_FACEBOOK_PIXEL_INTEGRATION_SERVICE =
  'ADD_FACEBOOK_PIXEL_INTEGRATION_SERVICE';
export function addFacebookPixelIntegrationService(requestInfoObj) {
  return {
    type: ADD_FACEBOOK_PIXEL_INTEGRATION_SERVICE,
    requestInfo: requestInfoObj
  };
}

export const ADD_GOOGLE_ANALYTICS_INTEGRATION_SERVICE =
  'ADD_GOOGLE_ANALYTICS_INTEGRATION_SERVICE';
export function addGoogleAnalyticsIntegrationService(requestInfoObj) {
  return {
    type: ADD_GOOGLE_ANALYTICS_INTEGRATION_SERVICE,
    requestInfo: requestInfoObj
  };
}

export const ADD_FACEBOOK_MESSENGER_INTEGRATION_SERVICE =
  'ADD_FACEBOOK_MESSENGER_INTEGRATION_SERVICE';
export function addFacebookMessengerIntegrationService(requestInfoObj) {
  return {
    type: ADD_FACEBOOK_MESSENGER_INTEGRATION_SERVICE,
    requestInfo: requestInfoObj
  };
}
