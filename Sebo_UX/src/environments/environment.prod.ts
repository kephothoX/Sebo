const config =  {
  "domain": "kephothosolutions.us.auth0.com",
  "clientId": "NeSibIQPs3rzvu4fQeZpbnaXidZwf7jK",
  "authorizationParams": {
    "audience": "{https://kephothosolutions.us.auth0.com/api/v2/"
  },
  "apiUri": "https://standing-weasel-117.convex.site",
  "appUri": "https://sebo.vercel.app",
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
    domain,
    clientId,
    authorizationParams: {
      ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
      redirect_uri: window.location.origin,
    },
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};

