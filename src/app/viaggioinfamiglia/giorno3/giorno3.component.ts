import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Viaggioinfamiglia } from 'src/app/model/viaggioinfamiglia';

@Component({
  selector: 'app-giorno3',
  templateUrl: './giorno3.component.html',
  styleUrls: ['./giorno3.component.css']
})
export class Giorno3Component {

  Viaggioinfamiglia: Viaggioinfamiglia[] = [];

  constructor(private meta: Meta) {
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("sinagoga.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("FontanaAquilone.jpg")
    );
    this.Viaggioinfamiglia.push(
      new Viaggioinfamiglia ("CampoDeFiori.jpg")
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
