import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfultirdService } from '../services/contentfultirdservice';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent {

  constructor(private contentfultirdService: ContentfultirdService, private route: ActivatedRoute, private meta: Meta) {}

  concertPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.concertPosts$ = this.contentfultirdService.getAllEntriesConcert();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: 'Resta aggiornato sui migliori concerti a Roma nella nostra guida online. Dai grandi concerti alle esibizioni locali,\
                scopri la musica dal vivo nella Città Eterna. Leggi la nostra guida e rimani informato sugli eventi musicali a Roma.'
    });

  }

}
