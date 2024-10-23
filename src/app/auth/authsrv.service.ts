import { iAccessData } from './../interfeces/i-access-data';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject } from 'rxjs';
import { iLoginRequest } from '../interfeces/i-login-request';
import { iUser } from '../interfeces/iuser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthsrvService {

  jwtHelper:JwtHelperService = new JwtHelperService();

  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl
  autoLogoutTimer:any

  authSubject$ = new BehaviorSubject <iAccessData | null>(null)
  // nel subject ci saranno i dati di accesso dell'utente se presenti con il token

  register(newUser:Partial<iUser>){
    return this.http.post<iAccessData>(this.registerUrl,newUser)

  }
// la chiamata post per inviare i dati dell'utente

  login(authData: iLoginRequest){
    return this.http.post<iAccessData>(this.loginUrl,authData)
    .pipe(tap(
      data => {
        this.authSubject$.next(data)
        //inserisco i dati nel subject che me li memorizza
        localStorage.setItem('data',JSON.stringify(data))
        //li inserico anche nel local storage in caso l'utente ricaricasse la pagina
        const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken)
        //Recupero la data di scadenza del token
        if(!expDate) return
        //se c'è un errore con la data blocca la funzione
        this.autoLogout(expDate)
        //logout automatico se il token è scaduto
      }
    ))
  }

  constructor(private http:HttpClient, private router: Router) { }


  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime()
    this.autoLogoutTimer = setTimeout(()=>{
      this.logout()
    }, expMs)
  }

  logout(){
    this.authSubject$.next(null)
    localStorage.removeItem('accessData')
    this.router.navigate(['/auth/login']);
  }

}
