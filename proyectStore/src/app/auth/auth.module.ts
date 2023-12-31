import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CardComponent } from './component/card/card.component';
import { MaterialModule } from '../material/material.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';




@NgModule({
  declarations: [
  
    LayoutPageComponent,
       RegisterPageComponent,
       ListPageComponent,
       CardComponent,
       LoginPageComponent,
     
       
  ],
  imports: [
    MaterialModule,
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
