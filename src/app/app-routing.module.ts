import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectionPageComponent} from "./connection-page/connection-page.component";
import {UserListPageComponent} from "./user-list-page/user-list-page.component";

const routes: Routes = [
  {path: 'user-list', component: UserListPageComponent},
  {path: '', component: ConnectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
