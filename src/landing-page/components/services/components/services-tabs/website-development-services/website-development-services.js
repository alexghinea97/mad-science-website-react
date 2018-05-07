import WebsiteDevelopmentModalContent from './components/modal-contents/WebsiteDevelopmentModalContent';
import GoogleAnalyticsIntegrationModalContent from './components/modal-contents/GoogleAnalyticsIntegrationModalContent';
import FacebookPixelIntegrationModalContent from './components/modal-contents/FacebookPixelIntegrationModalContent';
import FacebookMessengerIntegrationModalContent from './components/modal-contents/FacebookMessengerIntegrationModalContent';
import EmailSubscriptionIntegrationModalContent from './components/modal-contents/EmailSubscriptionIntegrationModalContent';
import LocalizationIntegrationModalContent from './components/modal-contents/LocalizationIntegrationModalContent';
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
