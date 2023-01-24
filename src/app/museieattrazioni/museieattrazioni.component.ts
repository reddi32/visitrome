import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsecondService } from '../services/contentfulsecond.service';

@Component({
  selector: 'app-museieattrazioni',
  templateUrl: './museieattrazioni.component.html',
  styleUrls: ['./museieattrazioni.component.css']
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
