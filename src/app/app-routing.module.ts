import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashbord', component: DashbordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
