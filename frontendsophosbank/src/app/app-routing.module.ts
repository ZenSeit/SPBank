import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
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
    path:"users",
    component: UsersPageComponent,
  },
  {
    path:'user/:id',
    component:UserPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
