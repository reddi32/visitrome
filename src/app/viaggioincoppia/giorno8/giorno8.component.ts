import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno8',
  templateUrl: './giorno8.component.html',
  styleUrls: ['./giorno8.component.css']
})
export class Giorno8Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("romaNight.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("CircoMassimo.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("PiazzaVenezia.webp")
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
