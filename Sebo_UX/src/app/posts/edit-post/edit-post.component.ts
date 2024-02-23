import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SeboService } from 'src/app/services/sebo.service';



@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {
    formData: any = new FormData();

  constructor (
    private _formbuilder: FormBuilder,
    private _seboService: SeboService
  ) {

  }


  editPostForm = this._formbuilder.group({
    post_title: ['', Validators.required],
    post: ['', Validators.required]
  });



  onSubmit() {
    const values = this.editPostForm.value;

    console.log(values);

    this.formData.append('created_by', `${ window.sessionStorage.getItem('userId')}`);
    
    this.formData.append('post_title', `${ values.post_title}`);

    this.formData.append('post', `${ values.post}`);

    this._seboService.addNewPost(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  resetForm() {
    this.editPostForm.reset();
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.formData.append('attachment', event.target.files[0]);
      this.formData.append('attachment_name', `${event.target.files[0].name}`);

    }
  }
}
