import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home-header',
  template: `
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
          <h1 title="{{name}}"><a class="navbar-brand logo" href="{{url}}" >{{ name }}</a></h1>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarsExample07" style="">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" routerLink="/posts">Posts <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="/video">React</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" routerLink="api/graphql">Graph</a>
                </li>
                
            </ul>
            <ul class="nar-right navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle user" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i class="fa fa-user fa-2" aria-hidden="true"></i>  Account</a>
                <div class="dropdown-menu" aria-labelledby="dropdown07">
                      <a class="dropdown-item" (click)="useLanguage('en')" >Login</a>
                      <a class="dropdown-item" (click)="useLanguage('fr')" >Register</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/posts"><i class="fa fa-cloud-upload fa-2" aria-hidden="true"></i>  Upload</a>
              </li>
              
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown07">
                      <a class="dropdown-item" (click)="useLanguage('en')" >English</a>
                      <a class="dropdown-item" (click)="useLanguage('fr')" >Vietnamese</a>
                  </div>
              </li>
              <li class="nav-item">
                <a class="nav-link get-vip-button" routerLink="/posts">GET VIP NOW</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-md-0">
                <input class="form-control input-search" type="text" placeholder="Search" aria-label="Search">
            </form>
          </div>
      </div>
    </nav>
  </header>
  `,
  styleUrls: ['../../../assets/css/style.css']
})
export class HomeHeaderComponent implements OnInit {
  

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
