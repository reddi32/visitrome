import { Component, OnInit } from '@angular/core';
import { romapass } from '../model/romacard';

@Component({
  selector: 'app-romapass',
  templateUrl: './romapass.component.html',
  styleUrls: ['./romapass.component.css']
})
export class RomapassComponent implements OnInit {

  Romapass: romapass[] = [];
  constructor() {
    this.Romapass.push(
      new romapass ("usingphone.png", "Scegli la durata del tuo Roma Pass (48 ore o 72 ore) e usalo dove preferisci.", "Step 1: Scegli")
    );
    this.Romapass.push(
      new romapass ("shoppingcart.png", "Acquista il tuo Roma Pass online e ritiralo in uno dei tourist point abiltati.", "Step 2: Compra")
    );
    this.Romapass.push(
      new romapass ("cashlesspayment.png", "Attiva il tuo Roma Pass in un museo e sui mezzi pubblici. Da quel momento partono le tue ore di utilizzo.", "Step 3: Attiva")
    )
   }
  ngOnInit(): void {
  }

}
