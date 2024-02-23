import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SeboService } from 'src/app/services/sebo.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  formData: any = new FormData();

  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService
  ) {

  }


  newPostForm = this._formbuilder.group({
    post_title: ['', Validators.required],
    post: ['', Validators.required]
  });



  onSubmit() {
    const values = this.newPostForm.value;

    console.log(values);

    this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);

    this.formData.append('post_title', `${ values.post_title}`);

    this.formData.append('post', `${ values.post}`);

    this._seboService.addNewPost(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  resetForm() {
    this.newPostForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.formData.append('attachment', event.target.files[0] );
      this.formData.append('attachment_name', `${event.target.files[0].name}`);


      console.log(event.target.files[0] as Blob );

    }
  }

}
