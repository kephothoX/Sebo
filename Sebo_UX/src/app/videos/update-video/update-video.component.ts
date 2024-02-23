import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SeboService } from 'src/app/services/sebo.service';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.scss']
})
export class UpdateVideoComponent {

      formData: any = new FormData();

  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService
  ) {

  }


  editVideoForm = this._formbuilder.group({
    video_title: ['', Validators.required],
    video_caption: ['', Validators.required]
  });



  onSubmit() {
    const values = this.editVideoForm.value;

    console.log(values);

    this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);

    this.formData.append('video_title', `${ values.video_title}`);

    this.formData.append('video_caption', `${ values.video_caption}`);

    this._seboService.addNewPost(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  resetForm() {
    this.editVideoForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.formData.append('attachment', event.target.files[0]);
      this.formData.append('attachment_name', `${event.target.files[0].name}`);

    }
  }

}
