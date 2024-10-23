import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthsrvService } from '../authsrv.service';
import { iUser } from '../../interfeces/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  formData:Partial<iUser> = {}

  constructor(private authSvc : AuthsrvService, private router:Router){}

  register(){
    this.authSvc.register(this.formData)
    .subscribe(res => {
      this.router.navigate(['auth/']);
    })
    console.log('registrazione andata a buon fine')
  }
}
