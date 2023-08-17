import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Itinerari } from '../model/itinerari';
import { EmailUtentiService } from '../services/email-utenti.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-itinerari',
  templateUrl: './itinerari.component.html',
  styleUrls: ['./itinerari.component.css']
})
export class ItinerariComponent implements OnInit {

  itinerariInfo: Itinerari[] = [];
  itinerariInfo2: Itinerari[] = [];
  itinerariInfo3: Itinerari[] = [];

  emailForm!: FormGroup;
  showSuccessMessage = false;

  constructor(private meta: Meta, private firebase: EmailUtentiService, private formBuilder: FormBuilder) {
    this.itinerariInfo.push(
      new Itinerari("family.jpg", "Venire a Roma in famiglia è davvero un’ottima idea! Ci sono tantissime cose da fare e tantissimi luoghi da scoprire, questo è sicuro.", "Una viaggio indimenticabile in famiglia", "Maggiori informazioni")
    );
    this.itinerariInfo2.push(
      new Itinerari("friends.jpg", "Avete voglia di divertirvi? Che ne direste di una vacanza con gli amici? Non dovete pensare a nulla perché abbiamo già la destinazione perfetta: Roma!", "Una vacanza con gli amici a Roma", "Maggiori informazioni")
    );
    this.itinerariInfo3.push(
      new Itinerari("couple.jpg", "Sei in cerca di ispirazione per un viaggio romantico a Roma? Lasciati conquistare dagli splendidi monumenti, le passeggiate romantiche e i ristoranti tipici della capitale.", "Una vacanza in coppia a Roma", "Maggiori informazioni")
    );
  }

  //Nascondi il popup dopo 5 secondi
  hideSuccessMessage(): void {
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000); // 5000 millisecondi = 5 secondi
  }

  onSubmit() {
    //console.log(this.emailForm);

    this.firebase.insertEmail(
      'https://visitrome-379610-default-rtdb.europe-west1.firebasedatabase.app/itinerari.json',
      { email: this.emailForm.value.email }
    ).subscribe(data => { })

    this.emailForm.reset();
    this.showSuccessMessage = true;
    this.hideSuccessMessage();
  }

  ngOnInit(): void {

    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.meta.addTag({
      name: 'description',
      content: 'Scopri i migliori itinerari per visitare Roma nella nostra guida online. Dalle attrazioni turistiche più famose ai tesori nascosti della città, \
                trova il percorso perfetto per scoprire la Città Eterna. Leggi la nostra guida e fatti guidare alla scoperta dei luoghi più suggestivi di Roma.'
    });

  }

}
