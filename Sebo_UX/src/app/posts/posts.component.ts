import { Component, OnInit } from '@angular/core';

import { SeboService } from '../services/sebo.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  Posts: Post[] = new Array();

  constructor (
    private _seboService: SeboService
  ) {}

  ngOnInit(): void {
      this._seboService.getPosts().subscribe((response: any) => {
        this.Posts = response;
        
      });
  
  }

  like(id: String) {
    this._seboService.addPostLike({
      post_id: id,
      like_id: `${ id }_${ window.sessionStorage.getItem('userId')}`,
      created_by: window.sessionStorage.getItem('userId')
     }).subscribe((response: any) => {

     });
  }

  countLikes(id: String) {
    this._seboService.countPostLikes({
      post_id: id
     }).subscribe((response: any) => {

      const elem = document.getElementById(`${ id}`);

      if (elem) {
        elem.innerHTML = response;
      } 
      return response

     });
  }


}
