import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos.component';

import { NewVideoComponent } from './new-video/new-video.component';
import { UpdateVideoComponent } from './update-video/update-video.component';

const routes: Routes = [
  { path: '', title: 'Videos', component: VideosComponent },
  { path: 'new', title: 'Upload Video', component: NewVideoComponent },
  { path: 'edit/:id', title: 'Update Video', component: UpdateVideoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
