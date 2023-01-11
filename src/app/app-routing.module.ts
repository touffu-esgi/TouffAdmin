import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionPageComponent} from "./connection-page/connection-page.component";
import {UserListPageComponent} from "./user-list-page/user-list-page.component";
import {UserDetailPageComponent} from "./user-detail-page/user-detail-page.component";
import {AuthGuard} from "./auth-guard";

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'provider-detail',
    component: UserDetailPageComponent,
    canActivate: [AuthGuard]},
  {path: '', component: ConnectionPageComponent},
  {path: '**', component: UserListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
