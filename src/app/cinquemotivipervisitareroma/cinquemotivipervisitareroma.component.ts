import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cinquemotivipervisitareroma',
  templateUrl: './cinquemotivipervisitareroma.component.html',
  styleUrls: ['./cinquemotivipervisitareroma.component.css']
})
export class CinquemotivipervisitareromaComponent {

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: "Scopri i cinque motivi principali per visitare Roma nella nostra guida turistica online. Dalle meraviglie archeologiche ai tesori artistici, \
                dalla gastronomia all'atmosfera unica, Roma ha tanto da offrire. Leggi la nostra guida e scopri perché Roma è una destinazione imperdibile per tutti \
                i viaggiatori."
    });

  }

}
