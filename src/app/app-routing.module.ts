import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './sidenav/account/account.component';
import { AuthGuard } from './login-page/service/auth.guard';
import { ChartComponent } from './sidenav/chart/chart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login-page/login/login.component';
import { RegisterComponent } from './signup-page/register/register.component';
import { TableComponent } from './sidenav/table/table.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'chart',component:ChartComponent},
  {path: 'table',component:TableComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'account',component:AccountComponent},
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
