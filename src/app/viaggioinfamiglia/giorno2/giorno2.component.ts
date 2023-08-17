import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno2',
  templateUrl: './giorno2.component.html',
  styleUrls: ['./giorno2.component.css']
})
export class Giorno2Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("cupola-1.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("basilica.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("navona.jpg")
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
