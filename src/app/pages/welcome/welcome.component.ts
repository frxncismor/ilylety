import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  items = [
    {name: 'mi amor', class: 'primary'},
    {name: 'Lety', class: 'secondary'},
    {name: 'darling', class: 'tertiary'},
    {name: 'honey', class: 'fourth'}
  ];
  selectedName: any = null;
  nameSelected: any;
  constructor() { }

  ngOnInit(): void {
  }
  select(name) {
    this.selectedName = name;
    console.log("name", this.selectedName);
  }

  changeName() {
    this.selectedName = null;
  }
}
