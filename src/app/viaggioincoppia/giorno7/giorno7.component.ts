import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno7',
  templateUrl: './giorno7.component.html',
  styleUrls: ['./giorno7.component.css']
})
export class Giorno7Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("piazza-navona-1.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("piazzadispagna-1.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("ViaDeiForiImperiali.jpg")
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
