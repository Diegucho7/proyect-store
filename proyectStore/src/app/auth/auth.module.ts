import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
  
    LayoutPageComponent,
       RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule

  ]
})
export class AuthModule { }
