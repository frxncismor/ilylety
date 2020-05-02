import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

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
  constructor(private router: Router, public service: ServiceService) { }

  ngOnInit(): void {
  }
  select(name) {
    this.selectedName = name;
    console.log("name", this.selectedName);
  }

  changeName() {
    this.selectedName = null;
  }

  next(){
    this.router.navigateByUrl('/letter');
    this.service.setName(this.selectedName);
  }
}
