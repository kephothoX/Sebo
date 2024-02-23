import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { SeboService } from '../services/sebo.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Post } from '../interfaces/post';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
   Posts: Post[] = new Array();


  formData = new FormData();

  constructor(
    private _seboService: SeboService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    public _matSnackBar: MatSnackBar
  ) { }

  searchForm = this._formBuilder.group({
    params: ['', Validators.required]
  });

  onSubmit() {
    this._seboService.search({
      params: this.searchForm.value.params
    }).subscribe((response: any) => {
      console.log(response);

      this.Posts = response;
    });
  }

}
