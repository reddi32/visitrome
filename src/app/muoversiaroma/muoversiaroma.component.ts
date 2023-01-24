import { Component, OnInit } from '@angular/core';
import { Taxi } from '../model/taxi';

@Component({
  selector: 'app-muoversiaroma',
  templateUrl: './muoversiaroma.component.html',
  styleUrls: ['./muoversiaroma.component.css']
})
export class MuoversiaromaComponent implements OnInit {

  tickets = [
    {col1: 'Biglietto singolo', col2: '1.5€'},
    {col1: 'Biglietto multibit 10 biglietti integrati', col2: '15€'},
    {col1: 'Biglietto 24h', col2: '7€'},
    {col1: 'Biglietto 48h', col2: '12.50€'},
    {col1: 'Biglietto 72h', col2: '18€'},
    {col1: 'Biglietto settimanale', col2: '24€'},
  ]

  taxi = [
    {col1: 'Quota fissa di partenza dalle 6:00 alle 22:00', col2: '3€'},
    {col1: 'Quota fissa di partenza nei giorni festivi, dalle 6:00 alle 22:00', col2: '4€'},
    {col1: 'Quota fissa di partenza in orario notturno', col2: '6.50€'},
    {col1: 'Prezzo per chilometro (tariffa 1)', col2: '1.10€'},
    {col1: 'Prezzo per chilometro (tariffa 2)', col2: '1.30€'},
    {col1: 'Prezzo per chilometro (tariffa 3)', col2: '1.60€'},
    {col1: 'Supplemento per ogni valigia aggiuntiva (una per passeggero)', col2: '1€'},
    {col1: 'Supplemento per la prenotazione telefonica', col2: '3.50€'},
    {col1: 'Supplemento per ogni ora di attesa', col2: '27€'}
  ]


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
