import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstCard } from '../model/firstcard';
import { Info } from '../model/info'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaInfo: Info[] = [];
  listaInfo2: Info[] = [];

  card: FirstCard[] = [];

  constructor() {
    this.listaInfo.push(
      new Info ("road-map.png", "Aereo, treno, autobus o macchina? È semplice, tutte le strade portano a Roma", "Arrivare a Roma", "Maggiori informazioni")
    );
    this.listaInfo2.push(
      new Info ("tram.png", "Muoversi in tram, autobus, metro, treno... Il trasporto è semplice a Roma", "Andare in giro", "Maggiori informazioni")
    );

    this.card.push(
      new FirstCard("FontanaDiTrevi.jpg", "Cinque motivi per cui visitare Roma", "Perché Roma dovrebbe essere aggiunta alla tua lista dei viaggi?", "Scopri di più")
    );
    this.card.push(
      new FirstCard("Colosseo.jpg", "Attrazioni da vedere assolutamente", "Pianifichi una visita a Roma? Vieni a scoprire le migliori attrazioni della città", "Scopri di più")
    );
    this.card.push(
      new FirstCard("Cupolone.jpg", "Roma top 10", "Stai per venire a Roma ed hai bisogno di un'ispirazione per la tua visita? Unisciti a noi", "Scopri di più")
    );
  }


  ngOnInit(): void {

  }

}
