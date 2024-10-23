import { AuthsrvService } from './../authsrv.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { iLoginRequest } from '../../interfeces/i-login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formData:iLoginRequest = {
    email : '',
    password : ''
  }

  constructor(private authSvc : AuthsrvService, private router:Router){}

  login(){
    this.authSvc.login(this.formData)
    .subscribe(data =>{
      console.log('ok')
      this.router.navigate([''])
    })
  }

}
