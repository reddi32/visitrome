import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsecondService } from '../services/contentfulsecond.service';

@Component({
  selector: 'app-attrazioni',
  templateUrl: './attrazioni.component.html',
  styleUrls: ['./attrazioni.component.css']
})
export class AttrazioniComponent {

  constructor(private contentfulsecondService: ContentfulsecondService, private route: ActivatedRoute) {}

  attractionPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.attractionPosts$ = this.contentfulsecondService.getAllEntriesAttraction();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }
  

}
