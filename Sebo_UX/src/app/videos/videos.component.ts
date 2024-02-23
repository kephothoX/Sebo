import { Component, OnInit } from '@angular/core';

import { SeboService } from '../services/sebo.service';
import { Video } from '../interfaces/video';
import { UserProfile } from '../interfaces/user-profile';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  Videos: Video[] = new Array();
  UserProfile!: UserProfile;
  ProfileThumbnail!: String;

  constructor (
    private _seboService: SeboService
  ) {}

  ngOnInit(): void {
      this._seboService.getVideos().subscribe((response: any) => {
        this.Videos = response;

        console.log(this.Videos);
      });  
  }

  like(id: String) {
    this._seboService.addVideoLike({
      video_id: id,
      like_id: `${ id }_${ window.sessionStorage.getItem('userId')}`,
      created_by: window.sessionStorage.getItem('userId')
     }).subscribe((response: any) => {

      console.log(response);
     });
  }

  countLikes(id: String) {
    this._seboService.countVideoLikes({
      video_id: id
     }).subscribe((response: any) => {
      console.log(response);

      const elem = document.getElementById(`${ id}`);

      if (elem) {
        elem.innerHTML = response;
      }

      return response

     });
  }

  getUserProfile(id: String) {
    this._seboService.getUserProfile({ created_by: id }).subscribe((resp: any) => {
          console.log(resp);
          this.UserProfile = resp[0];
          this.ProfileThumbnail = resp[0].profile_thumbnail;
        });

  }


}
