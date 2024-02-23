import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthnRoutingModule } from './authn-routing.module';
import { AuthnComponent, LoginComponent, LogOutComponent, SignUpComponent } from './authn.component';

import { environment as environ } from 'src/environments/environment';


@NgModule({
  declarations: [
    AuthnComponent,
    LoginComponent,
    SignUpComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    AuthnRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,

    AuthModule.forRoot({
      domain: 'kephothosolutions.us.auth0.com',
      clientId: "NeSibIQPs3rzvu4fQeZpbnaXidZwf7jK",
    authorizationParams: {
      audience: 'https://kephothosolutions.us.auth0.com/api/v2/',
      redirect_uri: 'http://localhost:4201/profile/new'
  }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],

})
export class AuthnModule { }
