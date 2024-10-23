import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MainButtonComponent } from './main-button/main-button.component';


@NgModule({
  declarations: [
    CardComponent,
    MainButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    MainButtonComponent
  ]
})
export class SharedModule { }
