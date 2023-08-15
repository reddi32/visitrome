import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulfiveService } from '../services/contentfulfive.service';
import { ContentfulnineService } from '../services/contentfulnine.service';

@Component({
  selector: 'app-romainfamiglia-post',
  templateUrl: './romainfamiglia-post.component.html',
  styleUrls: ['./romainfamiglia-post.component.css']
})
export class RomainfamigliaPostComponent {

  constructor(private contentfulfiveService: ContentfulfiveService, private contentfulnineService: ContentfulnineService, private route: ActivatedRoute) {}

  romainfamigliaPost$ : Observable<any> | undefined;
  attivitaperbambiniPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.romainfamigliaPost$ = this.contentfulfiveService.getEntryByIdRomaInFamiglia(id);
      }
    )

    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.attivitaperbambiniPosts$ = this.contentfulnineService.getEntryByIdAttivitaPerBambini(id);
      }
    )
  }
}
