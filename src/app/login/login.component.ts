import { Component, OnInit } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl : './login.component.html',
  styleUrls: ['../../assets/css/login-style.css']
})


export class LoginComponent implements OnInit {

  tesst='';   
  password='';

  onSubmit(){

  }
  constructor() { }

  ngOnInit() {
  }

}
