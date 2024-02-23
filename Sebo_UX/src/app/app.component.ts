import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppService } from './services/app.service';
import { AuthService } from '@auth0/auth0-angular';

import { SeboService } from './services/sebo.service';

import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Sebo';


  constructor (
    private _appService: AppService,
    private _auth0Service: AuthService,
    private _seboService: SeboService,
    private _router: Router,
    public _matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    if (Boolean(window.sessionStorage.getItem('isAuthenticated')) == false) {
      this._auth0Service.isAuthenticated$.subscribe((response: any) => {

        if (response == true) {

          this._router.navigate(['/timeline']);

        } else {

          if (window.sessionStorage.getItem('user') == null || undefined || '') {

            this._matSnackBar.open('Signup to continue...', 'Close');

            this._router.navigate(['/authn/signup']);

          } else {

            this._matSnackBar.open('Login to continue...', 'Close');
            this._router.navigate(['/authn/login']);
          }
        }

      });
    }

    if (window.sessionStorage.getItem('userId') == null || undefined && window.sessionStorage.getItem('cvxUser')) {

      this._seboService.getUser({ email: window.sessionStorage.getItem('email') }).subscribe((response: any) => {
        window.sessionStorage.setItem('userId', `${response[0]['_id']}`);

        window.sessionStorage.setItem('cvxUser', `${JSON.stringify(response[0])}`);
      });
    }
  }

  

}
