import { Component, OnInit } from '@angular/core';
import { Taxi } from '../model/taxi';

@Component({
  selector: 'app-pianificaviaggio',
  templateUrl: './pianificaviaggio.component.html',
  styleUrls: ['./pianificaviaggio.component.css']
})
export class PianificaviaggioComponent implements OnInit {

  //listaTaxi: Taxi[] = [];
  constructor() {
    /*this.listaTaxi.push(
      new Taxi ("Radio Taxi", "06-3570", "Play Store", "App Store")
    );
    this.listaTaxi.push(
      new Taxi ("Pronto Taxi", "06-6645", "Play Store", "App Store")
    );
    this.listaTaxi.push(
      new Taxi ("Pronto Taxi", "06-6645", "Play Store", "App Store")
    );
    this.listaTaxi.push(
      new Taxi ("Pronto Taxi", "06-6645", "Play Store", "App Store")
    );*/
   }

  ngOnInit(): void {
  }

}
