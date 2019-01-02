import WebsiteDevelopmentModalContent from './components/website-development-service/WebsiteDevelopmentService';
import GoogleAnalyticsIntegrationModalContent from './components/google-analytics-integration-service/GoogleAnalyticsIntegrationService';
import FacebookPixelIntegrationModalContent from './components/facebook-pixel-integration-service/FacebookPixelIntegrationService';
import FacebookMessengerIntegrationModalContent from './components/facebook-messenger-integration-service/FacebookMessengerIntegrationService';
import EmailSubscriptionIntegrationModalContent from './components/email-subscription-integration-service/EmailSubscriptionIntegrationService';
import LocalizationIntegrationModalContent from './components/localization-integration-service/LocalizationIntegrationService';

export default [
  {
    name: 'WEBSITE DEVELOPMENT',
    component: WebsiteDevelopmentModalContent
  },
  {
    name: 'GOOGLE ANALYTICS INTEGRATION',
    component: GoogleAnalyticsIntegrationModalContent
  },
  {
    name: 'FACEBOOK PIXEL INTEGRATION',
    component: FacebookPixelIntegrationModalContent
  },
  {
    name: 'FACEBOOK MESSENGER INTEGRATION',
    component: FacebookMessengerIntegrationModalContent
  },
  {
    name: 'EMAIL SUBSCRIPTION INTEGRATION',
    component: EmailSubscriptionIntegrationModalContent
  },
  {
    name: 'LOCALIZATION',
    component: LocalizationIntegrationModalContent
  },
  {
    name: 'BLOG AND BLOG MANAGEMENT'
  }
];
