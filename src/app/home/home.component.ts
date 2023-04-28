import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstCard } from '../model/firstcard';
import { Info } from '../model/info'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaInfo: Info[] = [];
  listaInfo2: Info[] = [];

  card: FirstCard[] = [];
  card2: FirstCard[] = [];
  card3: FirstCard[] =  [];

  constructor(private meta: Meta) {
    this.listaInfo.push(
      new Info ("road-map.png", "Aereo, treno, autobus o macchina? È semplice, tutte le strade portano a Roma", "Arrivare a Roma", "Maggiori informazioni")
    );
    this.listaInfo2.push(
      new Info ("tram.png", "Muoversi in tram, autobus, metro, treno... Il trasporto è semplice a Roma", "Andare in giro", "Maggiori informazioni")
    );

    this.card.push(
      new FirstCard("FontanaDiTrevi.jpg", "Cinque motivi per cui visitare Roma", "Perché Roma dovrebbe essere aggiunta alla tua lista dei viaggi?", "Scopri di più")
    );
    this.card2.push(
      new FirstCard("Colosseo.jpg", "Attrazioni da vedere assolutamente", "Pianifichi una visita a Roma? Vieni a scoprire le migliori attrazioni della città", "Scopri di più")
    );
    this.card3.push(
      new FirstCard("Cupolone.jpg", "Roma top 10", "Stai per venire a Roma ed hai bisogno di un'ispirazione per la tua visita? Unisciti a noi", "Scopri di più")
    );
  }


  ngOnInit(): void {

    this.meta.addTag({
      name: 'description',
      content: 'Benvenuti su VisitRome. Scopri la città eterna con la nostra guida online: musei, monumenti, attrazioni turistiche, \
                eventi e molto altro ancora. Pianifica la tua visita a Roma e goditi tutte le meraviglie che questa città ha da offrire. Visita il nostro \
                sito per trovare informazioni sui luoghi da visitare, i ristoranti, gli hotel e molto altro.'
    });
  }

}
