import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulfiveService } from '../services/contentfulfive.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-romainfamiglia',
  templateUrl: './romainfamiglia.component.html',
  styleUrls: ['./romainfamiglia.component.css']
})
export class RomainfamigliaComponent {

  constructor(private contentfulfiveService: ContentfulfiveService, private route: ActivatedRoute, private meta: Meta) {}

  romainfamigliaPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.romainfamigliaPosts$ = this.contentfulfiveService.getAllEntriesRomaInFamiglia();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: 'Scopri come goderti Roma con la tua famiglia nella nostra guida online. Dalle attrazioni per i bambini ai luoghi di interesse per tutta \
                la famiglia, trova le attività perfette per trascorrere del tempo insieme nella Città Eterna. Leggi la nostra guida e pianifica un viaggio \
                a Roma che sia adatto a grandi e piccini.'
    });
  }

}
