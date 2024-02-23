import { Component, OnInit } from '@angular/core';

import { SeboService } from '../services/sebo.service';
import { Photo } from '../interfaces/photo';

import { UserProfile } from '../interfaces/user-profile';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  Photos: Photo[] = new Array();
  UserProfile!: UserProfile;
  ProfileThumbnail!: String;

  constructor (
    private _seboService: SeboService
  ) {}

  ngOnInit(): void {
      this._seboService.getPhotos().subscribe((response: any) => {
        this.Photos = response;

    
      });
  
  }

  like(id: String) {
    this._seboService.addPhotoLike({
      photo_id: id,
      like_id: `${ id }_${ window.sessionStorage.getItem('userId')}`,
      created_by: window.sessionStorage.getItem('userId')
     }).subscribe((response: any) => {
      console.log(response);
     });
  }

  countLikes(id: String) {
    this._seboService.countPhotoLikes({
      photo_id: id
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
