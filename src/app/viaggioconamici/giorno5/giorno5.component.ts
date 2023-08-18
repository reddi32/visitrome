import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno5',
  templateUrl: './giorno5.component.html',
  styleUrls: ['./giorno5.component.css']
})
export class Giorno5Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("VillaBorghese.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("basilica.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("colosseo-due-1.jpg")
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
