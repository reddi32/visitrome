import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsevenService } from '../services/contentfulseven.service';


@Component({
  selector: 'app-dovemangiare-post',
  templateUrl: './dovemangiare-post.component.html',
  styleUrls: ['./dovemangiare-post.component.css']
})
export class DovemangiarePostComponent {

  constructor(private contentfulsevenService: ContentfulsevenService, private route: ActivatedRoute) {}

  dovemangiarePost$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.dovemangiarePost$ = this.contentfulsevenService.getEntryByDoveMangiare(id);
      }
    )
  }

}
