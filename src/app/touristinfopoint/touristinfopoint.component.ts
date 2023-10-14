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
      new InfoPoint ("Tourist Infopoint Termini", "Orari d'apertura", "Tutti i giorni 08.00-19.00", "colosseum.webp", "Via Giovanni Giolitti, 34", "Info")
    );
    this.listaDeskFori.push(
      new InfoPoint ("Tourist Infopoint Fori Imperiali", "Orari d'apertura", "Tutti i giorni 09.30-19.00", "colosseum.webp", "Via dei Fori Imperiali", "Info")
    );
    this.listaDeskCastel.push(
      new InfoPoint ("Tourist Infopoint Via Menghetti", "Orari d'apertura", "Tutti i giorni 09.30-19.00", "colosseum.webp", "Via Marco Minghetti", "Info")
    );
    this.listaDeskMenghetti.push(
      new InfoPoint ("Tourist Infopoint Castel Sant'Angelo", "Orari d'apertura", "Tutti i giorni 08.30-18.00 fino al 26/03/2023", "colosseum.webp", "Piazza Pia", "Info")
    );
    this.listaDeskCiampino.push(
      new InfoPoint ("Tourist Infopoint Ciampino", "Orari d'apertura", "Tutti i giorni 08.30-18.00", "colosseum.webp", "Aeroporto G.B. Pastine - zona esterna Arrivi Internazionali", "Info")
    );
    this.listaDeskFiumicino.push(
      new InfoPoint ("Tourist Infopoint Fiumicino", "Orari d'apertura", "Tutti i giorni 08.30-18.00", "colosseum.webp", "Aeroporto Fiumicino - Leonardo Da Vinci - Arrivi Internazionali Terminal T3", "Info")
    );
  }

}
