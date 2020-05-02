import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  fecha: Date = new Date('YYYY-MM-DD');

  d: any;

  selectedName: any;
  constructor(public service: ServiceService) { }

  

  ngOnInit(): void {
    this.selectedName = this.service.getName();
    // this.fecha.;
  }

  formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    switch (month) {
      case '01':
        month = "Enero"
        break;
      case '02':
        month = "Febrero"
        break;
      case '03':
        month = "Marzo"
        break;
      case '04':
        month = "Abril"
        break;
      case '05':
        month = "Mayo"
        break;
      case '06':
        month = "Junio"
        break;
      case '07':
        month = "Julio"
        break;
      case '08':
        month = "Agosto"
        break;
      case '09':
        month = "Septiembre"
        break;
      case '10':
        month = "Octubre"
        break;
      case '11':
        month = "Noviembre"
        break;
      case '12':
        month = "Diciembre"
        break;
    }
    return `${day} de ${month} del ${year}`;
  }

}
