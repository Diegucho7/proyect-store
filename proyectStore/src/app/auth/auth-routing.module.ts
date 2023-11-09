import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
    // localhost/4200/auth/
    {
        path: '',
        component: LayoutPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
   
})
export class AuthRoutingModule { }
