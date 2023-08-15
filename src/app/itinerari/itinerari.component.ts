import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Itinerari } from '../model/itinerari';

@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.css']
})
export class ItinerariComponent implements OnInit {

  itinerariInfo: Itinerari[] = [];
  itinerariInfo2: Itinerari[] = [];
  itinerariInfo3: Itinerari[] = [];

  constructor(private meta: Meta) {
    this.itinerariInfo.push(
      new Itinerari("family.jpg", "Venire a Roma in famiglia è davvero un’ottima idea! Ci sono tantissime cose da fare e tantissimi luoghi da scoprire, questo è sicuro.", "Una viaggio indimenticabile in famiglia", "Maggiori informazioni")
    );
    this.itinerariInfo2.push(
      new Itinerari("friends.jpg", "Avete voglia di divertirvi? Che ne direste di una vacanza con gli amici? Non dovete pensare a nulla perché abbiamo già la destinazione perfetta: Roma!", "Una vacanza con gli amici a Roma", "Maggiori informazioni")
    );
    this.itinerariInfo3.push(
      new Itinerari("couple.jpg", "Sei in cerca di ispirazione per un viaggio romantico a Roma? Lasciatevi conquistare dagli splendidi monumenti, le passeggiate romantiche e i ristoranti tipici della capitale.", "Una vacanza in coppia a Roma", "Maggiori informazioni")
    );
  }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Scopri i migliori itinerari per visitare Roma nella nostra guida online. Dalle attrazioni turistiche più famose ai tesori nascosti della città, \
                trova il percorso perfetto per scoprire la Città Eterna. Leggi la nostra guida e fatti guidare alla scoperta dei luoghi più suggestivi di Roma.'
    });

  }

}
