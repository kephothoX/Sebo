import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SeboService } from 'src/app/services/sebo.service';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.scss']
})
export class NewPhotoComponent {

  formData: any = new FormData();

  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService
  ) {

  }


  newPhotoForm = this._formbuilder.group({
    img_title: ['', Validators.required],
    img_caption: ['', Validators.required]
  });



  onSubmit() {
    const values = this.newPhotoForm.value;

    console.log(values);

    this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);

    this.formData.append('img_title', `${ values.img_title}`);

    this.formData.append('img_caption', `${ values.img_caption}`);

    this._seboService.addNewPhoto(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  resetForm() {
    this.newPhotoForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {

      this.formData.append('attachment', event.target.files[0]);
      this.formData.append('attachment_name', `${event.target.files[0].name}`);

    }
  }


}
