import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import {AuthGuard} from './guards';
const routes: Routes = [
  {path: "", component: HomeComponent,  canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path: "upload-data", component: UploadDataComponent,  canActivate: [AuthGuard]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }