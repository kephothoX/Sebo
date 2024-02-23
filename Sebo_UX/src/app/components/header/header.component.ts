import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@auth0/auth0-angular';

import { ActivatedRoute, Router, Route } from '@angular/router';
import { SeboService } from 'src/app/services/sebo.service';

import { UserProfile } from 'src/app/interfaces/user-profile';


import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title?: string;
  profileId: string | null = window.sessionStorage.getItem('profileId');
  userProfile!: UserProfile;
  imageURL!: string;

  accountEmail?: string | null | undefined = window.sessionStorage.getItem('email');

  formData = new FormData();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _seboService: SeboService,
    public _snackBar: MatSnackBar,
    private _auth0Service: AuthService,
    private _formBuilder: FormBuilder,
    public _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('isAuthenticated') == null || undefined || 'false' || false && window.sessionStorage.getItem('userId') == null || undefined) {
      this._auth0Service.isAuthenticated$.subscribe((response: any) => {

        window.sessionStorage.setItem('isAuthenticated', `${response}`);



        this._auth0Service.user$.subscribe((response: any) => {
          window.sessionStorage.setItem('user', `${JSON.stringify(response)}`);
          console.log(response);

          if (response != null && window.sessionStorage.getItem('profileId') == null || undefined) {

            alert('Just Called...');

              this.formData.append('created_by', `${window.sessionStorage.getItem('userId')}`);
              this.formData.append('username', response.nickname);
              this.formData.append('family_name', response.family_name);
              this.formData.append('given_name', response.given_name);
              this.formData.append('name', response.name);
              this.formData.append('email', response.email);
              this.formData.append('date_of_birth', '');
              this.formData.append('country', '');
              this.formData.append('phone_number', '');
              this.formData.append('about', '');
              this.formData.append('hobbies', '');
              this.formData.append('interests', '');
              this.formData.append('picture_url', response.picture);



              window.sessionStorage.setItem('email', `${response.email}`);
              window.sessionStorage.setItem('email_verified', `${response.email_verified}`);
              window.sessionStorage.setItem('name', `${response.name}`);
              window.sessionStorage.setItem('username', `${response.nickname}`);

              window.sessionStorage.setItem('isLoggedIn', 'true');

              this._matSnackBar.open(`Welcome ${response.name}`, 'Close');

              this._seboService.addNewProfile(this.formData).subscribe((resp: any) => {
                window.sessionStorage.setItem('profileId', resp);
              });

           

              this._seboService.addNewUser({
                username: response.nickname,
                email: response.email
              }).subscribe((resp: any) => {
                window.sessionStorage.setItem('userId', resp);
              });
          

          } 
          
        });

        if (window.sessionStorage.getItem('email') == null || undefined && window.sessionStorage.getItem('user') == null || undefined) {

          this._auth0Service.user$.subscribe((response: any) => {

            window.sessionStorage.setItem('user', `${JSON.stringify(response)}`);
            window.sessionStorage.setItem('email', `${response.email}`);
            window.sessionStorage.setItem('username', `${response.nickname}`);


            if (window.sessionStorage.getItem('userId') != null || undefined) {

              this._seboService.updateUser({
                _id: window.sessionStorage.getItem('userId'),
                username: response.nickname,
                email: response.email
              }).subscribe();
            }

            window.sessionStorage.setItem('isAuthenticated$', `${JSON.stringify(this._auth0Service.isAuthenticated$)}`);


            this._auth0Service.isAuthenticated$.subscribe((response: any) => {

              window.sessionStorage.setItem('isAuthenticated', `${response}`)
            });
          });

        }

      });
    } else {
      this._matSnackBar.open('Login to Continue.', 'Close');
      this._router.navigate(['/authn/login']);

    }


    this.title = this._activatedRoute.snapshot.routeConfig?.title?.toString();

    if (window.sessionStorage.getItem('profileId') != null || undefined) {
      this._seboService.getUserProfileById({ _id: window.sessionStorage.getItem('profileId') }).subscribe((response: any) => {
        console.log(response);

        this.userProfile = response;

        if (response.profile_thumbnail != null) {
          this.imageURL = response.profile_thumbnail;
        } else {
          this.imageURL = response.social_image_url;
        }
      });
    }
  }




  logOutUser() {
    this._router.navigate(['/personal/auth']);

  }

}
