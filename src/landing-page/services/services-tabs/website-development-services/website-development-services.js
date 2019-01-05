import WebsiteDevelopmentModalContent from './website-development-service/WebsiteDevelopmentService';
import GoogleAnalyticsIntegrationModalContent from './google-analytics-integration-service/GoogleAnalyticsIntegrationService';
import FacebookPixelIntegrationModalContent from './facebook-pixel-integration-service/FacebookPixelIntegrationService';
import FacebookMessengerIntegrationModalContent from './facebook-messenger-integration-service/FacebookMessengerIntegrationService';
import EmailSubscriptionIntegrationModalContent from './email-subscription-integration-service/EmailSubscriptionIntegrationService';
import LocalizationIntegrationModalContent from './localization-integration-service/LocalizationIntegrationService';
import BlogAndBlogManagmentModalContent from './blog-and-blog-managment-service/BlogAndBlogManagmentService';

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
    name: 'BLOG AND BLOG MANAGEMENT',
    component: BlogAndBlogManagmentModalContent
  }
];
