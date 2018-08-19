import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';

import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {HomeVideoComponent} from './home/home-video/home-video.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeFooterComponent} from './home/home-footer/home-footer.component';
import { LoginComponent } from './login/login.component';



const routerConfig :Routes = [
    {path:'',component:HomeComponent,children:[
        {path:'',component:HomeComponent},
        {path:'video',component:HomeVideoComponent},

    ]},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports :[RouterModule.forRoot(routerConfig),
        
    ],

    declarations:[
    ],
    exports:[RouterModule]
})

export class AppRouterModule{
    
}


