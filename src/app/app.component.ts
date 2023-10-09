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
      {name: 'Blog', route: '/blog'},
      {name: 'Dove mangiare', route: '/dovemangiare'}, 
      {name: 'Musei e attrazioni', route: '/museieattrazioni'},
      {name: 'Roma Pass', route: '/romapass'},
      {name: 'Roma in famiglia', route: '/romainfamiglia'},
      {name: 'Shopping', route: '/shopping'},
      {name: 'Vita notturna', route: '/vitanotturna'}
    ]},
    {name: 'Calendario', subitems: [
      {name: 'Concerti', route: '/concert'},
      {name: 'Mostre', route: '/mostre'},
      {name: 'Vita notturna', route: '/vitanotturna'}
    ]},
    {name: 'Pianifica il tuo viaggio', subitems: [
      {name: 'Come arrivare', route: '/comearrivare'},
      {name: 'Info', route: '/romapass'},
      {name: 'I nostri itinerari', route: '/itinerari'},
      {name: 'Muoversi per Roma', route: '/muoversiaroma'},
      {name: 'Tuorist Infopoint', route: '/touristinfopoint'},
    ]}
  ]

  footers = [
    {name: 'Cosa Fare', subitems: [
      {name: 'Blog', route: '/blog'},
      {name: 'Dove mangiare', route: '/dovemangiare'}, 
      {name: 'Musei e attrazioni', route: '/museieattrazioni'},
      {name: 'Roma Pass', route: '/romapass'},
      {name: 'Roma in famiglia', route: '/romainfamiglia'},
      {name: 'Shopping', route: '/shopping'}

    ]},
    {name: 'Calendario', subitems: [
      {name: 'Concerti', route: '/concert'},
      {name: 'Mostre', route: '/mostre'},
      {name: 'Vita notturna', route: '/vitanotturna'}
    ]},
    {name: 'Pianifica il tuo viaggio', subitems: [
      {name: 'Come arrivare', route: '/comearrivare'},
      {name: 'Info', route: '/romapass'},
      {name: 'I nostri itinerari', route: '/itinerari'},
      {name: 'Muoversi per Roma', route: '/muoversiaroma'},
      {name: 'Tuorist Infopoint', route: '/touristinfopoint'},
    ]}
  ]
}
