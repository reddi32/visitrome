import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulfourthService } from '../services/contentfulfourth.service';

@Component({
  selector: 'app-nightlife-post',
  templateUrl: './nightlife-post.component.html',
  styleUrls: ['./nightlife-post.component.css']
})
export class NightlifePostComponent {

  constructor(private contentfulfourthService: ContentfulfourthService, private route: ActivatedRoute) {}

  nightlifePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.nightlifePosts$ = this.contentfulfourthService.getEntryByIdNightlife(id);
      }
    )
  }
}
