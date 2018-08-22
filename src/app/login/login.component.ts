import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl : './login.component.html',
  styleUrls: ['../../assets/css/ad-style.css']
})


export class LoginComponent implements OnInit {

  constructor(
    private _notifications: NotificationsService,
    private _fb: FormBuilder
  ) { }


  ngOnInit() {}

  login(){
    console.log("notify")
    this._notifications.success("title", "content",{timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: false,
      clickToClose: false,
      maxLength: 10})
  }

}
