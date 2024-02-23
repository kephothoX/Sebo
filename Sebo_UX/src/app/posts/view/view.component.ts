import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from 'src/app/interfaces/post';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { SeboService } from 'src/app/services/sebo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  postId: string = '';
  Post?: Post;
  UserProfile!: UserProfile;
  ProfileThumbnail!: String;
  Likes!: Number;

  constructor (
    private _seboService: SeboService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = this._activatedRoute.snapshot.params['id'];
      this.postId = id;

      this._seboService.getPostById({ id: this.postId }).subscribe((response: any) => {
        console.log(response);

        this.Post = response

        this._seboService.getUserProfile({ created_by: response.created_by }).subscribe((resp: any) => {
          console.log(resp);
          this.UserProfile = resp[0];
          this.ProfileThumbnail = resp[0].profile_thumbnail;
        });
      });

  }

    like() {
    this._seboService.addPostLike({
      post_id: this.Post?._id,
      like_id: `${ this.Post?._id }_${ window.sessionStorage.getItem('userId')}`,
      created_by: window.sessionStorage.getItem('userId')
     }).subscribe((response: any) => {

      console.log(response);
     });
  }

  countLikes() {
    this._seboService.countPostLikes({
      post_id: this.Post?._id
     }).subscribe((response: any) => {

      this.Likes = response;

     });
  }


}
