import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfuleightService } from '../services/contentfuleight.service';

@Component({
  selector: 'app-mostre',
  templateUrl: './mostre.component.html',
  styleUrls: ['./mostre.component.css']
})
export class MostreComponent {

  constructor(private contentfuleighService: ContentfuleightService, private route: ActivatedRoute) {}

  mostrePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.mostrePosts$ = this.contentfuleighService.getAllEntriesMostre();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }

}
