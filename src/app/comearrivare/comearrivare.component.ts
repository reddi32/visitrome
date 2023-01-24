import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comearrivare',
  templateUrl: './comearrivare.component.html',
  styleUrls: ['./comearrivare.component.css']
})
export class ComearrivareComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
