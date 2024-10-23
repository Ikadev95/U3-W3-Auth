import { ProductSvcService } from './../services/product-svc.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private Prodsvc:ProductSvcService){}
click(){
 this.Prodsvc.unlock = !this.Prodsvc.unlock
}
}
