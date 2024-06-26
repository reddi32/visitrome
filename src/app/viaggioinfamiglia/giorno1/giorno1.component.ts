import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno1',
  templateUrl: './giorno1.component.html',
  styleUrls: ['./giorno1.component.css']
})
export class Giorno1Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("Fori-Imperiali-1.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("piazza-navona-1.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("pantheon-1.webp")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("piazzadispagna-1.webp")
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
