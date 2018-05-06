import WebsiteDevelopmentModalContent from './modal-contents/WebsiteDevelopmentModalContent';
import GoogleAnalyticsIntegrationModalContent from './modal-contents/GoogleAnalyticsIntegrationModalContent';
import FacebookPixelIntegrationModalContent from './modal-contents/FacebookPixelIntegrationModalContent';
import FacebookMessengerIntegrationModalContent from './modal-contents/FacebookMessengerIntegrationModalContent';
import EmailSubscriptionIntegrationModalContent from './modal-contents/EmailSubscriptionIntegrationModalContent';

export default [
  {
    name: 'Website Development',
    component: WebsiteDevelopmentModalContent
  },
  {
    name: 'Google analytics integration',
    component: GoogleAnalyticsIntegrationModalContent
  },
  {
    name: 'Facebook pixel integration',
    component: FacebookPixelIntegrationModalContent
  },
  {
    name: 'Facebook messenger integration',
    component: FacebookMessengerIntegrationModalContent
  },
  {
    name: 'Email Subscription integration',
    component: EmailSubscriptionIntegrationModalContent
  },
  {
    name: 'Localization'
  },
  {
    name: 'Blog and blog management'
  }
];
