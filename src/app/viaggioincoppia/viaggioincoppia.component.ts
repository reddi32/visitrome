import { Component } from '@angular/core';

@Component({
  selector: 'app-viaggioincoppia',
  templateUrl: './viaggioincoppia.component.html',
  styleUrls: ['./viaggioincoppia.component.css']
})
export class ViaggioincoppiaComponent {

  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
  
}
