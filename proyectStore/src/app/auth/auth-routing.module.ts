import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
    // localhost/4200/auth/
    {
        path: '',
        component: LayoutPageComponent,
    
    children:[

        {
            path: 'register',
            component: RegisterPageComponent
        },
        {
            path: 'list',
            component: ListPageComponent
        },
        {
            path: 'login',
            component: LoginPageComponent
        }
    ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
   
})
export class AuthRoutingModule { }
