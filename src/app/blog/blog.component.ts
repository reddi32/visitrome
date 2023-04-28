import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute, private meta: Meta) { }

  blogPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();

    this.route.params.subscribe(
      params => {
        const id = params['id'];

        //this.blogPosts$ = this.contentfulService.getEntryById(id);
      }
    );
    
    this.meta.addTag({
      name: 'description',
      content: 'Scopri le ultime notizie sulla città di Roma nel nostro blog dedicato. Resta aggiornato su eventi, cultura, gastronomia e molto altro ancora. \
                Leggi le nostre notizie e approfondimenti sulla Città Eterna e non perderti nulla di quello che Roma ha da offrire.'
    });
    
  }

}
