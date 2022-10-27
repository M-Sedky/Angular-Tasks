import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { UserTestComponent } from './user-test/user-test.component';

const routs: Routes = [
  { path: '', redirectTo: 'User/profile', pathMatch: 'full' },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'usertest', component: UserTestComponent },
];

@NgModule({
  declarations: [UserProfileComponent, UserTestComponent],
  imports: [CommonModule, [RouterModule.forChild(routs)]],
})
export class UsermModule {}
