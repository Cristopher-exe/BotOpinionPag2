import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PantallaComponent } from './pages/pantalla/pantalla.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './login/login.component';
//import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path: 'principal', component: PrincipalComponent },
  {path: 'opiniones', component: PantallaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**',pathMatch: 'full', redirectTo:'principal'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
