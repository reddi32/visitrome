import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-comearrivare',
  templateUrl: './comearrivare.component.html',
  styleUrls: ['./comearrivare.component.css']
})
export class ComearrivareComponent implements OnInit {

  constructor(private meta: Meta) {}

  items = [
    {col1: 'Leonardo Express', col2: '18€'},
    {col1: 'Treno Regionale FL1', col2: '7€'},
    {col1: 'Transfer in Bus', col2: '6€'},
    {col1: 'Prenotare il Taxi in anticipo', col2: '50€'},
  ]

  bus = [
    {col1: 'Bus diretto, arrivi in città in 30 minuti', col2: '6€'},
    {col1: 'Bus più la Metro, arrivi in città in 40 minuti', col2: '3€'},
    {col1: 'Bus più treno,arrivi in città in 30 minuti', col2: '3€'},
    {col1: 'In taxi arrivi in città in 30 minuti', col2: '31€'},
  ]

  pullman = [
    {col1: 'Autobus dal Sud Italia verso Roma', col2: '6€'},
    {col1: 'Autobus dal Sud Italia verso Roma', col2: '3€'},
    {col1: 'Autobus dal Nord Italia verso Roma', col2: '3€'},
    {col1: 'Autobus dal Nord Italia verso Roma', col2: '31€'},
  ]

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Scopri le migliori opzioni per raggiungere Roma nella nostra guida completa. Dalle modalità di trasporto più convenienti a come muoversi in città,\
                troverai tutte le informazioni necessarie per pianificare il tuo viaggio a Roma. Leggi la nostra guida e scopri come arrivare a Roma in modo \
                facile e conveniente.'
    });

  }

}
