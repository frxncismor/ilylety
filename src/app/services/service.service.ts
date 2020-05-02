import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selectedName: any;
  constructor() { }

  setName(name){
    this.selectedName = name;
  }
  getName(){
    return this.selectedName;
  }
}
