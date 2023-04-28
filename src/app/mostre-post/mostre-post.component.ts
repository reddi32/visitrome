import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfuleightService } from '../services/contentfuleight.service';

@Component({
  selector: 'app-mostre-post',
  templateUrl: './mostre-post.component.html',
  styleUrls: ['./mostre-post.component.css']
})
export class MostrePostComponent {

  constructor(private contentfuleightService: ContentfuleightService, private route: ActivatedRoute) {}

  mostrePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.mostrePosts$ = this.contentfuleightService.getEntryByIdMostre(id);
      }
    )
  }

}
