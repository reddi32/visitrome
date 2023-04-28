import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsevenService } from '../services/contentfulseven.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dovemangiare',
  templateUrl: './dovemangiare.component.html',
  styleUrls: ['./dovemangiare.component.css']
})
export class DovemangiareComponent {

  constructor(private contentfulsevenService: ContentfulsevenService, private route: ActivatedRoute, private meta: Meta) {}

  dovemangiarePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.dovemangiarePosts$ = this.contentfulsevenService.getAllEntriesDoveMangiare();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: 'Scopri i migliori ristoranti e locali dove mangiare a Roma nella nostra guida online. Dalle trattorie tradizionali ai ristoranti di lusso, \
                trova il luogo perfetto per gustare la cucina locale. Leggi la nostra guida e fatti guidare alla scoperta dei migliori posti dove mangiare a Roma.'
    });
  }

}
