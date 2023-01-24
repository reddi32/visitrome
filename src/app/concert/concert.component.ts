import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsecondService } from '../services/contentfulsecond.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent {

  constructor(private contentfulsecondService: ContentfulsecondService, private route: ActivatedRoute) {}

  concertPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.concertPosts$ = this.contentfulsecondService.getAllEntriesConcert();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }

}
