import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/interfaces/country';
import { UserProfile } from 'src/app/interfaces/user-profile';

import { SeboService } from 'src/app/services/sebo.service';
import { AppService  } from 'src/app/services/app.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  Countries?: Country[];
  Phone_Prefix?: String;
  UserProfile!: UserProfile;
  formData = new FormData();


  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService,
    private _appService: AppService,
    private _router: Router,
    public _matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this._appService.getCountryCodes().subscribe((result: any) => {
      this.Countries = result;
    });

    this._seboService.getUserProfileById({ _id: window.sessionStorage.getItem('profileId')}).subscribe((response: any) => {
        console.log(response);

        this.UserProfile = response;
        
      });

    


  }


  getCountryPrefix(prefix: string) {
    this.Phone_Prefix = prefix;
  }


  editProfileForm = this._formbuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    username: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    country: ['', Validators.required],
    phone_number: ['', Validators.required],
    about: ['', Validators.required],
    hobbies: ['', Validators.required],
    interests: ['', Validators.required],
  });



  onSubmit() {
    const values = this.editProfileForm.value;

    this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);
    this.formData.append('username',  `${ values.username }`);
    this.formData.append('family_name',  `${ values.name?.split(' ')[0] }`);
    this.formData.append('given_name',   `${ values.name?.split(' ')[1] }`);
    this.formData.append('name', `${ values.name }`);
    this.formData.append('email', `${ values.email }`);
    this.formData.append('date_of_birth', `${ values.date_of_birth }`);
    this.formData.append('country', `${ values.country }`);
    this.formData.append('phone_number', `${ values.phone_number }`);
    this.formData.append('about', `${ values.about }`);
    this.formData.append('hobbies',`${ values.hobbies }`);
    this.formData.append('interests', `${ values.interests }`);
    


    this._seboService.updateUserProfile(this.formData).subscribe((response: any) => {
     this._matSnackBar.open('Profile Updated Successfully', 'Close');
     this._router.navigate(['/timeline']);
    });

    
  }

  resetForm() {
    this.editProfileForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {

      this.formData.append('attachment', event.target.files[0]);
      this.formData.append('attachment_name', `${event.target.files[0].name}`);

    }
  }

}
