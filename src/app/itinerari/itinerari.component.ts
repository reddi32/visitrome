import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.css']
})
export class ItinerariComponent {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Scopri i migliori itinerari per visitare Roma nella nostra guida online. Dalle attrazioni turistiche più famose ai tesori nascosti della città, \
                trova il percorso perfetto per scoprire la Città Eterna. Leggi la nostra guida e fatti guidare alla scoperta dei luoghi più suggestivi di Roma.'
    });

  }

}
