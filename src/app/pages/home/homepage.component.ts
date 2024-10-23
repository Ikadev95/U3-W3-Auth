import { ProductSvcService } from './../../services/product-svc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  prods:Object[] = [];
  constructor(private ProdSvc: ProductSvcService){}
  ngOnInit(): void {
    this.prods = this.ProdSvc.poducts
  }

}
