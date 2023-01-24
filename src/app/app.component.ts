import { Component } from '@angular/core';
import { MatDivider } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visitrome2';

  items = [
    {name: 'Cosa Fare', subitems: [
      {name: 'Roma Pass', route: '/romapass'},
      {name: 'Attrazioni', route: '/attrazioni'},
      {name: 'Mostre', route: '/mostre'},
      {name: 'Vita notturna', route: '/vitanotturna'},
      {name: 'Roma in famiglia', route: '/romainfamiglia'},
      {name: 'Shopping', route: '/shopping'},
      {name: 'Blog', route: '/blog'}
    ]},
    {name: 'Calendario', subitems: [
      {name: 'Concerti', route: '/concerti'},
      {name: 'Cinema', route: '/cinema'},
      {name: 'Mostre', route: '/mostre'},
      {name: 'Vita notturna', route: '/vitanotturna'}
    ]},
    {name: 'Pianifica il tuo viaggio', subitems: [
      {name: 'Come arrivare', route: '/comearrivare'},
      {name: 'Muoversi per Roma', route: '/muoversiaroma'},
      {name: 'I nostri itinerari', route: '/itinerari'},
      {name: 'Tuorist Infopoint', route: '/infopoint'},
      {name: 'Info', route: '/romapass'}
    ]}
  ]

  footers = [
    {name: 'Home', route: ''},
    {name: 'Features', route: ''},
    {name: 'FAQs', route: ''},
    {name: 'About', route: ''},
  ]
}
