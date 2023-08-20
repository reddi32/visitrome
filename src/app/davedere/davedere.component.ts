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
      new Cosavedere ("Colosseo-cosa-vedere.jpg")
    );
    this.cosavedere.push(
      new Cosavedere ("colosseo-due.jpg")
    );
    this.cosavedere.push(
      new Cosavedere ("arena-colosseo.jpg")
    );
    this.cosavedere.push(
      new Cosavedere ("Fori-Imperiali.jpg")
    );

    this.pantheon.push(
      new Cosavedere ("pantheon-due.jpg")
    );
    this.pantheon.push(
      new Cosavedere ("cupola-pantheon.jpg")
    );
    this.sanPietro.push(
      new Cosavedere ("san-pietro.jpg")
    );
    this.sanPietro.push(
      new Cosavedere ("vaticano.jpg")
    );
    this.sanPietro.push(
      new Cosavedere ("giardini-vaticani.jpg")
    );
    this.sanPietro.push(
      new Cosavedere ("san-pietro-interno.jpg")
    );
    this.castelSantAngelo.push(
      new Cosavedere ("castel-sant'angelo.jpg")
    );
    this.castelSantAngelo.push(
      new Cosavedere ("castel-sant'angelo-due.jpg")
    );
    this.fontanaDiTrevi.push(
      new Cosavedere ("fontana-di-trevi.jpg")
    );
    this.fontanaDiTrevi.push(
      new Cosavedere ("trevi.jpg")
    );
    this.gianicolo.push(
      new Cosavedere ("gianicolo.jpg")
    );
    this.gianicolo.push(
      new Cosavedere ("gianicolo-due.jpg")
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
