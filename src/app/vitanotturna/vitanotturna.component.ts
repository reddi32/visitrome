import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulfourthService } from '../services/contentfulfourth.service';

@Component({
  selector: 'app-vitanotturna',
  templateUrl: './vitanotturna.component.html',
  styleUrls: ['./vitanotturna.component.css']
})
export class VitanotturnaComponent {

  constructor(private contentfulfourthService: ContentfulfourthService, private route: ActivatedRoute) {}

  nightlifePosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.nightlifePosts$ = this.contentfulfourthService.getAllEntriesNightlife();

    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }


}
