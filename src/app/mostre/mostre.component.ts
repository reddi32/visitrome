import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfuleightService } from '../services/contentfuleight.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mostre',
  templateUrl: './mostre.component.html',
  styleUrls: ['./mostre.component.css']
})
export class MostreComponent {

  constructor(private contentfuleighService: ContentfuleightService, private route: ActivatedRoute, private meta: Meta) {}

  mostrePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.mostrePosts$ = this.contentfuleighService.getAllEntriesMostre();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: "Resta aggiornato sulle mostre che si terranno a Roma nella nostra guida online. Dalle mostre temporanee ai musei permanenti, \
                scopri le esposizioni d'arte più interessanti della città. Leggi la nostra guida e rimani informato sugli eventi artistici a Roma."
    });
  }

}
