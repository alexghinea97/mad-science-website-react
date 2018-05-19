import WebsiteDevelopmentModalContent from './components/website-development-service/WebsiteDevelopmentService';
import GoogleAnalyticsIntegrationModalContent from './components/google-analytics-integration-service/GoogleAnalyticsIntegrationService';
import FacebookPixelIntegrationModalContent from './components/facebook-pixel-integration-service/FacebookPixelIntegrationService';
import FacebookMessengerIntegrationModalContent from './components/facebook-messenger-integration-service/FacebookMessengerIntegrationService';
import EmailSubscriptionIntegrationModalContent from './components/email-subscription-integration-service/EmailSubscriptionIntegrationService';
import LocalizationIntegrationModalContent from './components/localization-integration-service/LocalizationIntegrationService';
import LocalizedStrings from '../../../../../../LocalizedStrings';

export default [
  {
    name: LocalizedStrings.body.services.websiteOptions.websiteDevelopment,
    component: WebsiteDevelopmentModalContent
  },
  {
    name: LocalizedStrings.body.services.websiteOptions.googleAnalitycsInt,
    component: GoogleAnalyticsIntegrationModalContent
  },
  {
    name: LocalizedStrings.body.services.websiteOptions.facebookPixelInt,
    component: FacebookPixelIntegrationModalContent
  },
  {
    name: LocalizedStrings.body.services.websiteOptions.facebookMessengerInt,
    component: FacebookMessengerIntegrationModalContent
  },
  {
    name: LocalizedStrings.body.services.websiteOptions.emailSubscrInt,
    component: EmailSubscriptionIntegrationModalContent
  },
  {
    name: LocalizedStrings.body.services.websiteOptions.localization,
    component: LocalizationIntegrationModalContent
  },
  {
    name: LocalizedStrings.body.services.websiteOptions.blogAndBlogManagement
  }
];
