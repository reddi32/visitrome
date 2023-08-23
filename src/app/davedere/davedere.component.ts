import { Component, OnInit } from '@angular/core';
import { Cosavedere } from '../model/cosavedere';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-davedere',
  templateUrl: './davedere.component.html',
  styleUrls: ['./davedere.component.css']
})
export class DavedereComponent {
  cosavedere: Cosavedere[] = [];
  pantheon: Cosavedere[] = [];
  sanPietro: Cosavedere[] = [];
  castelSantAngelo: Cosavedere[] = [];
  fontanaDiTrevi: Cosavedere[] = [];
  gianicolo: Cosavedere[] = [];

  constructor(private meta: Meta) {
    this.cosavedere.push(
      new Cosavedere ("Colosseo-cosa-vedere.webp")
    );
    this.cosavedere.push(
      new Cosavedere ("colosseo-due.webp")
    );
    this.cosavedere.push(
      new Cosavedere ("arena-colosseo.webp")
    );
    this.cosavedere.push(
      new Cosavedere ("Fori-Imperiali.webp")
    );

    this.pantheon.push(
      new Cosavedere ("pantheon-due.webp")
    );
    this.pantheon.push(
      new Cosavedere ("cupola-pantheon.webp")
    );
    this.sanPietro.push(
      new Cosavedere ("san-pietro.webp")
    );
    this.sanPietro.push(
      new Cosavedere ("vaticano.webp")
    );
    this.sanPietro.push(
      new Cosavedere ("giardini-vaticani.webp")
    );
    this.sanPietro.push(
      new Cosavedere ("san-pietro-interno.webp")
    );
    this.castelSantAngelo.push(
      new Cosavedere ("castel-sant'angelo.webp")
    );
    this.castelSantAngelo.push(
      new Cosavedere ("castel-sant'angelo-due.webp")
    );
    this.fontanaDiTrevi.push(
      new Cosavedere ("fontana-di-trevi.webp")
    );
    this.fontanaDiTrevi.push(
      new Cosavedere ("trevi.webp")
    );
    this.gianicolo.push(
      new Cosavedere ("gianicolo.webp")
    );
    this.gianicolo.push(
      new Cosavedere ("gianicolo-due.webp")
    );
  }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Scopri le bellezze di Roma con la nostra guida turistica online! Trova le migliori attrazioni \
                turistiche e le attività più divertenti da fare nella Città Eterna.'
    });

  }
}
