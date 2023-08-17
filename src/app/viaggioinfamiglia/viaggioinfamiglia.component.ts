import { Component } from '@angular/core';

@Component({
  selector: 'app-viaggioinfamiglia',
  templateUrl: './viaggioinfamiglia.component.html',
  styleUrls: ['./viaggioinfamiglia.component.css']
})
export class ViaggioinfamigliaComponent {

  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

}
