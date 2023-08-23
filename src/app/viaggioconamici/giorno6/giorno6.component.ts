import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno6',
  templateUrl: './giorno6.component.html',
  styleUrls: ['./giorno6.component.css']
})
export class Giorno6Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("vittoriano.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("viadelcorso-1.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("PiazzaDelPopolo.webp")
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
