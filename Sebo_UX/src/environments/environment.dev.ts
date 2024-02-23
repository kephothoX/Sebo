const config =  {
  "domain": '',
  "clientId": '',
  "authorizationParams": {
    "audience": ''
  },
  "apiUri": '',
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
    domain: '',
    clientId: '',
    authorizationParams: {
      audience: ''
  },
  apiUri: '',
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
