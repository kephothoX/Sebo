import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';

import { NewPhotoComponent } from './new-photo/new-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'new', title: 'Upload Photo', component: NewPhotoComponent },
  { path: 'edit/:id', title: 'Edit Photo', component: EditPhotoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
