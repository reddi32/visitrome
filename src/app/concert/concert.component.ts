import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfultirdService } from '../services/contentfultirdservice';


@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent {

  constructor(private contentfultirdService: ContentfultirdService, private route: ActivatedRoute) {}

  concertPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.concertPosts$ = this.contentfultirdService.getAllEntriesConcert();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }

}
