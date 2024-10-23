import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSvcService {

  poducts = [
    {
      id:1,
      image: 'https://cdn.sklum.com/it/wk/2718320/sedia-nordic.jpg?cf-resize=gallery',
      title:'Nordic'
    },
    {
      id:2,
      image: 'https://cdn.sklum.com/it/wk/3588895/tavolo-da-pranzo-rettangolare-in-legno-200x100-cm-giugno.jpg?cf-resize=gallery',
      title:'Aura'
    },
    {
      id:3,
      image: 'https://cdn.sklum.com/it/wk/2696449/lampada-da-parete-kunis.jpg?cf-resize=gallery',
      title:'Kunis'
    },
    {
      id:3,
      image: 'https://cdn.sklum.com/it/wk/1941287/sgabello-alto-da-giardino-in-legno-di-acacia-dubai.jpg?cf-resize=gallery',
      title:'Dubai'
    }
  ]

  unlock = false
  constructor() { }
}
