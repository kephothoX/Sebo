import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule  } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';

import { environment as environ } from 'src/environments/environment';
import { ErrorComponent } from './components/error/error.component';
import { ProfileDirective } from './directives/profile.directive';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
    ProfileDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCardModule,


    AuthModule.forRoot({
      domain: 'kephothosolutions.us.auth0.com',
      clientId: "NeSibIQPs3rzvu4fQeZpbnaXidZwf7jK",
    authorizationParams: {
      audience: 'https://kephothosolutions.us.auth0.com/api/v2/',
      redirect_uri: 'http://localhost:4201/timeline'
  }
      /*...environ.auth,
      httpInterceptor: {
        ...environ.httpInterceptor,
      }  */ 
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


