import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsecondService } from '../services/contentfulsecond.service';

@Component({
  selector: 'app-attraction-post',
  templateUrl: './attraction-post.component.html',
  styleUrls: ['./attraction-post.component.css']
})
export class AttractionPostComponent {

  constructor(private contentfulsecondService: ContentfulsecondService, private route: ActivatedRoute) {}

  attractionPosts$ : Observable<any> | undefined;

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.attractionPosts$ = this.contentfulsecondService.getEntryByIdAttraction(id);

      }
    )
    console.log(this.attractionPosts$);
  }

}
