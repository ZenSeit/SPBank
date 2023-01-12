import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UsersPageComponent } from './Pages/users-page/users-page.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component: HomePageComponent
  },
  {
    path:"login",
    component: LoginPageComponent
  },
  {
    path:"users",
    component: UsersPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/:id',
    component:UserPageComponent,
    canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
