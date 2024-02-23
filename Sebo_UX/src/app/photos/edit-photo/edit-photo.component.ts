import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SeboService } from 'src/app/services/sebo.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent {

    formData: any = new FormData();

  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService
  ) {

  }


  editPhotoForm = this._formbuilder.group({
    img_title: ['', Validators.required],
    img_caption: ['', Validators.required]
  });



  onSubmit() {
    const values = this.editPhotoForm.value;

    console.log(values);

    this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);

    this.formData.append('img_title', `${ values.img_title}`);

    this.formData.append('img_caption', `${ values.img_caption}`);

    this._seboService.addNewPost(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  resetForm() {
    this.editPhotoForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.formData.append('attachment', event.target.files[0]);
      this.formData.append('attachment_name', `${event.target.files[0].name}`);

    }
  }

}
