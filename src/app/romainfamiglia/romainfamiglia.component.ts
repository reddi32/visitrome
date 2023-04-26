import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulfiveService } from '../services/contentfulfive.service';

@Component({
  selector: 'app-romainfamiglia',
  templateUrl: './romainfamiglia.component.html',
  styleUrls: ['./romainfamiglia.component.css']
})
export class RomainfamigliaComponent {

  constructor(private contentfulfiveService: ContentfulfiveService, private route: ActivatedRoute) {}

  romainfamigliaPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.romainfamigliaPosts$ = this.contentfulfiveService.getAllEntriesRomaInFamiglia();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }

}
