import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';

import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {HomeVideoComponent} from './home/home-video/home-video.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeFooterComponent} from './home/home-footer/home-footer.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routerConfig :Routes = [
    {path:'',component:HomeComponent,children:[
        {path:'',component:HomeComponent},
        {path:'video',component:HomeVideoComponent},

    ]},
    {path:'admin',component:AdminComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports :[RouterModule.forRoot(routerConfig),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],

    declarations:[
        AdminComponent,
        HomeComponent,
        HomeVideoComponent,
        HomeHeaderComponent,
        HomeFooterComponent
    ],
    exports:[RouterModule]
})

export class AppRouterModule{
    
}


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }