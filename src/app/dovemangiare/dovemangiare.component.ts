import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsevenService } from '../services/contentfulseven.service';

@Component({
  selector: 'app-dovemangiare',
  templateUrl: './dovemangiare.component.html',
  styleUrls: ['./dovemangiare.component.css']
})
export class DovemangiareComponent {

  constructor(private contentfulsevenService: ContentfulsevenService, private route: ActivatedRoute) {}

  dovemangiarePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.dovemangiarePosts$ = this.contentfulsevenService.getAllEntriesDoveMangiare();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }

}
