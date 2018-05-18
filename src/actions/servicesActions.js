export const ADD_WEBSITE_DEV_SERVICE = 'ADD_WEBSITE_DEV_SERVICE';
export function addWebsiteDevService(requestInfoObj) {
  return {
    type: ADD_WEBSITE_DEV_SERVICE,
    requestInfo: requestInfoObj
  };
}
