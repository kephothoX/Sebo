import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

import { NewPostComponent } from './new-post/new-post.component';
import { ViewComponent } from './view/view.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new', title: 'New Post', component: NewPostComponent },
  { path: 'edit/:id', title: 'Edit', component: EditPostComponent },
  { path: 'view/:id', title: 'View', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
