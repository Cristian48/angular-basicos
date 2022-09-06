import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContadorComponent {
  title = 'bases';
  numero: number =10;
  valor:number =1;
  base:number =5;
  


  acumular(base:number,){
    debugger
    this.numero += base;

  }


}
