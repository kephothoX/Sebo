import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Country } from 'src/app/interfaces/country';

import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

import { SeboService } from 'src/app/services/sebo.service';
import { AppService  } from 'src/app/services/app.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.scss']
})
export class NewProfileComponent {
   Countries?: Country[];
   Phone_Prefix?: String;

   formData = new FormData();


  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService,
    private _appService: AppService,
    private _auth0Service: AuthService,
    private _router: Router,
    public _matSnackBar: MatSnackBar
  ) { }


  ngOnInit(): void {

      this._auth0Service.isAuthenticated$.subscribe((response: any) => {
        
        window.sessionStorage.setItem('isAuthenticated', `${ response }`)
      })


    this._auth0Service.user$.subscribe((response: any) => {
      window.sessionStorage.setItem('user', `${ JSON.stringify(response) }`);
      alert('called...');

      if (response != null ) {

        this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);
        this.formData.append('username',  response.nickname);
        this.formData.append('family_name',  response.family_name);
        this.formData.append('given_name',   response.given_name);
        this.formData.append('name', response.name);
        this.formData.append('email', response.email);
        this.formData.append('date_of_birth', '');
        this.formData.append('country', '');
        this.formData.append('phone_number', '');
        this.formData.append('about', '');
        this.formData.append('hobbies','');
        this.formData.append('interests', '');
        this.formData.append('picture_url', response.picture);

      

        window.sessionStorage.setItem('email', `${ response.email }`);
        window.sessionStorage.setItem('email_verified', `${ response.email_verified }`);
        window.sessionStorage.setItem('name', `${ response.name }`);
        window.sessionStorage.setItem('username', `${ response.nickname }`);

        window.sessionStorage.setItem('isLoggedIn', 'true');
      
        this._matSnackBar.open(`Welcome ${ response.name}`, 'Close');

        this._seboService.addNewProfile(this.formData).subscribe((resp: any) => {
          window.sessionStorage.setItem('profileId', resp);
        });

        this._seboService.addNewUser({
          username: response.nickname,
          email: response.email
        }).subscribe((resp: any) => {
          window.sessionStorage.setItem('userId', resp);
        }); 

      } else {
        this._matSnackBar.open('Login to Continue.', 'Close');
        this._router.navigate(['/authn']);

      }
    }); 

    this._appService.getCountryCodes().subscribe((result: any) => {
      this.Countries = result;
    });

    

  }



  getCountryPrefix(prefix: string) {
    this.Phone_Prefix = prefix;
  }


  newProfileForm = this._formbuilder.group({
    username: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    country: ['', Validators.required],
    phone_number: ['', Validators.required],
    about: ['', Validators.required],
    hobbies: ['', Validators.required],
    interests: ['', Validators.required],
  });


  onSubmit() {
    const values = this.newProfileForm.value;

    console.log(values);

    this.formData.append('username', `${ values.username }`);
    this.formData.append('date_of_birth', `${ new Date( `${ values.date_of_birth}` ).toISOString() }`);
    this.formData.append('country', `${ values.country }`);
    this.formData.append('phone_number', `${ values.phone_number }`);
    this.formData.append('about', `${ values.about }`);
    this.formData.append('hobbies', `${ values.hobbies }`);
    this.formData.append('interests', `${ values.interests }`);


    this._seboService.addNewProfile(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  resetForm() {
    this.newProfileForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {

      this.formData.append('attachment', event.target.files[0]);
      this.formData.append('attachment_name', `${event.target.files[0].name}`);

    }
  }

  
}
