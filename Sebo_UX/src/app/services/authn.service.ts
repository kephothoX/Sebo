import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthnService {
  /*sdk: any;

  constructor(
    private _appService: AppService
  ) {
    this.sdk = Descope({
      projectId: environment.B2C_PROJ_ID,
      baseUrl: environment.BASE_URL,
      persistTokens: true,
      autoRefresh: true,
    });
  }

  async getUserData(): Promise<User> {
    try {
      const sessionToken = this.sdk.getSessionToken();
      if (sessionToken && !this.sdk.isJwtExpired(sessionToken)) {
        const profile = await this.sdk.me(this.sdk.getRefreshToken());
        const user: User = {
          name: profile.data.name || 'No Name Set',
          email: profile.userEmail || 'test@descope.com',
          role: profile.data.role || 'No Role Set',
          picture: profile.data.picture || '',
        };
        return user;
      } else if (!sessionToken || this.sdk.isJwtExpired(sessionToken)) {
        try {
          await this.sdk.refresh();
          const profile = await this.sdk.me(this.sdk.getRefreshToken());
          const user: User = {
            name: profile.data.name || 'No Name Set',
            email: profile.userEmail || 'test@descope.com',
            role: profile.data.role || 'No Role Set',
            picture: profile.data.picture || '',
          };

          return user;
        } catch (error) {
          throw new Error('Failed to validate session. User is not logged in.');
        }
      } else {
        throw new Error('Failed to validate session. User is not logged in.');
      }
    } catch (err) {
      throw err;
    }
  }

  async validateSession(): Promise<any> {
    return this.sdk.refresh().then(() => {
      const sessionToken = this.sdk.getSessionToken();
      if (sessionToken && !this.sdk.isJwtExpired(sessionToken)) {
        return "You're logged in!";
      } else {
        let err = new Error(
          'Failed to validate session. User is not logged in.'
        );
        throw err;
      }
    });
  }

  async logout(): Promise<void> {
    await this.sdk.logout(this.sdk.getRefreshToken());
  }
*/
}
