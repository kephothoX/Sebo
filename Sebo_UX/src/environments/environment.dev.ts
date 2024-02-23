const config =  {
  "domain": "kephothosolutions.us.auth0.com",
  "clientId": "NeSibIQPs3rzvu4fQeZpbnaXidZwf7jK",
  "authorizationParams": {
    "audience": "{https://kephothosolutions.us.auth0.com/api/v2/"
  },
  "apiUri": "https://standing-weasel-117.convex.site",
  "appUri": "http://localhost:4200",
  "errorPath": "/error"
}


const { domain, clientId, authorizationParams: { audience }, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  authorizationParams: {
    audience?: string;
  },
  apiUri: string;
  errorPath: string;
};

export const environment = {
  production: false,
 auth: {
    domain: 'kephothosolutions.us.auth0.com',
    clientId: "NeSibIQPs3rzvu4fQeZpbnaXidZwf7jK",
    authorizationParams: {
      audience: 'https://kephothosolutions.us.auth0.com/api/v2/'
  },
  apiUri: 'https://standing-weasel-117.convex.site',
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
