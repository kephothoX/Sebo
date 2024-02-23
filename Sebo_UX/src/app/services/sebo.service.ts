import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError } from 'rxjs';

import { ErrorService } from './error.service';
import { AppService  } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class SeboService {

  constructor(
    private _httpClient: HttpClient,
    private _appService: AppService,
    private _errorService: ErrorService
  ) { }


  addNewPost(post: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/post/new`, post).pipe(catchError(this._errorService.handleError));
  }

  addNewProfile(post: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/user/profile/new`, post).pipe(catchError(this._errorService.handleError));
  }

  addNewPhoto(post: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/photo/new`, post).pipe(catchError(this._errorService.handleError));
  }

  addNewVideo(post: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/video/new`, post).pipe(catchError(this._errorService.handleError));
  }

  getUserProfiles(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/users/profiles`).pipe(catchError(this._errorService.handleError));
  }

  addNewUser(user: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/user/new`,user).pipe(catchError(this._errorService.handleError));
  }

  getUser(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/user`, data).pipe(catchError(this._errorService.handleError));
  }

  updateUser(data: any): Observable<any> {
    return this._httpClient.put(`${ this._appService.ConvexEndpoint }/user/update`, data).pipe(catchError(this._errorService.handleError));
  }

  getPosts(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/posts`).pipe(catchError(this._errorService.handleError));
  }

  getPhotos(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/photos`).pipe(catchError(this._errorService.handleError));
  }

  getVideos(): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/videos`).pipe(catchError(this._errorService.handleError));
  }

  getImage(storageId: String): Observable<any> {
    return this._httpClient.get(`${ this._appService.ConvexEndpoint }/image/${ storageId }`).pipe(catchError(this._errorService.handleError));
  }

  search(params: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/search`, params).pipe(catchError(this._errorService.handleError));
  }

  getPostById(id: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/post/id`, id).pipe(catchError(this._errorService.handleError));
  }

  getUserProfile(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/user/profile`, data).pipe(catchError(this._errorService.handleError));
  }

  getUserProfileById(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/user/profile/id`, data).pipe(catchError(this._errorService.handleError));
  }


  updateUserProfile(data: any): Observable<any> {
    return this._httpClient.put(`${ this._appService.ConvexEndpoint }/user/profile/update`, data).pipe(catchError(this._errorService.handleError));
  }

  addPhotoLike(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/photo/like`, data).pipe(catchError(this._errorService.handleError));
  }

  countPhotoLikes(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/photo/likes/count`, data).pipe(catchError(this._errorService.handleError));
  }

  addPostLike(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/post/like`, data).pipe(catchError(this._errorService.handleError));
  }

  countPostLikes(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/post/likes/count`, data).pipe(catchError(this._errorService.handleError));
  }

  addVideoLike(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/video/like`, data).pipe(catchError(this._errorService.handleError));
  }

  countVideoLikes(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.ConvexEndpoint }/video/likes/count`, data).pipe(catchError(this._errorService.handleError));
  }

}
