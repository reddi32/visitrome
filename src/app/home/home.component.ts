import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Info } from '../model/info'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaInfo: Info[] = [];
  listaInfo2: Info[] = [];
  constructor() {
    this.listaInfo.push(
      new Info ("road-map.png", "Aereo, treno, autobus o macchina? È semplice, tutte le strade portano a Roma", "Arrivare a Roma", "Maggiori informazioni")
    );
    this.listaInfo2.push(
      new Info ("tram.png", "Muoversi in tram, autobus, metro, treno... Il trasporto è semplice a Roma", "Andare in giro", "Maggiori informazioni")
    );
   }





  ngOnInit(): void {
  }

}
