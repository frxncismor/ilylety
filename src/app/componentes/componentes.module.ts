import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


const componentes = [
  NavbarComponent,
];

@NgModule({
  declarations: [componentes],
  imports: [
    CommonModule
  ], 
  exports: [
    componentes
  ]
})
export class ComponentesModule { }
