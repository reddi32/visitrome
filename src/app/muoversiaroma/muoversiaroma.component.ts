import { Component, OnInit } from '@angular/core';
import { Taxi } from '../model/taxi';

@Component({
  selector: 'app-muoversiaroma',
  templateUrl: './muoversiaroma.component.html',
  styleUrls: ['./muoversiaroma.component.css']
})
export class MuoversiaromaComponent implements OnInit {

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
