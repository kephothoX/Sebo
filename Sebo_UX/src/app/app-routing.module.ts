import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';

import { AuthGuard } from './authn/auth.guard'


const routes: Routes = [
  { path: '', redirectTo: '/404', pathMatch: 'full' },
  { path: 'timeline', loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule), canActivate: [AuthGuard] },
  { path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule), canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule), canActivate: [AuthGuard] },
  { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule), canActivate: [AuthGuard] },
  { path: 'authn', loadChildren: () => import('./authn/authn.module').then(m => m.AuthnModule) },

   { path: '404', title: 'Error', component: ErrorComponent },
  { path: '**', title: 'Error', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
