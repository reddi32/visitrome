import { Component } from '@angular/core';

@Component({
  selector: 'app-viaggioconamici',
  templateUrl: './viaggioconamici.component.html',
  styleUrls: ['./viaggioconamici.component.css']
})
export class ViaggioconamiciComponent {

  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

}
