import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

import { NewProfileComponent } from './new-profile/new-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'new', title: 'New Profile', component: NewProfileComponent },
  { path: 'edit/:id', title: 'Edit Profile', component: EditProfileComponent },
  { path: 'view/:id', title: 'View Profile', component: ViewComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
