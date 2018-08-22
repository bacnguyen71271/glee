import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRouterModule } from './router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {HomeVideoComponent} from './home/home-video/home-video.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeFooterComponent} from './home/home-footer/home-footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    HomeVideoComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule { }
  
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}