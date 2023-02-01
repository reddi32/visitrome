import { Component } from '@angular/core';
import { InfoPoint } from '../model/infopoint';

@Component({
  selector: 'app-touristinfopoint',
  templateUrl: './touristinfopoint.component.html',
  styleUrls: ['./touristinfopoint.component.css']
})
export class TouristinfopointComponent {

  listaDeskTermini: InfoPoint[] = [];
  listaDeskFori: InfoPoint[] = [];
  listaDeskCastel: InfoPoint[] = [];
  listaDeskMenghetti: InfoPoint[] = [];
  listaDeskFiumicino: InfoPoint[] = [];
  listaDeskCiampino: InfoPoint[] = [];


  constructor() {
    this.listaDeskTermini.push(
      new InfoPoint ("Tourist Infopoint Termini", "Orari d'apertura", "Tutti i giorni 8.00-19.00", "colosseum.png", "Via Giovanni Giolitti, 34", "Info")
    );
    this.listaDeskFori.push(
      new InfoPoint ("Tourist Infopoint Fori Imperiali", "Orari d'apertura", "Tutti i giorni 9.30-19.00", "colosseum.png", "Via dei Fori Imperiali", "Info")
    );
    this.listaDeskCastel.push(
      new InfoPoint ("Tourist Infopoint Via Menghetti", "Orari d'apertura", "Tutti i giorni 9.30-19.00", "colosseum.png", "Via Marco Minghetti", "Info")
    );
    this.listaDeskMenghetti.push(
      new InfoPoint ("Tourist Infopoint Castel Sant'Angelo", "Orari d'apertura", "Tutti i giorni 8.30 alle 18.00 fino al 26/03/2023", "colosseum.png", "Piazza Pia", "Info")
    );
    this.listaDeskCiampino.push(
      new InfoPoint ("Tourist Infopoint Ciampino", "Orari d'apertura", "Tutti i giorni 8.30-18.00", "colosseum.png", "Aeroporto G.B. Pastine - zona esterna Arrivi Internazionali", "Info")
    );
    this.listaDeskFiumicino.push(
      new InfoPoint ("Tourist Infopoint Fiumicino", "Orari d'apertura", "Tutti i giorni 8.30-18.00", "colosseum.png", "Aeroporto Fiumicino - Leonardo Da Vinci - Arrivi Internazionali Terminal T3", "Info")
    );
  }

}
