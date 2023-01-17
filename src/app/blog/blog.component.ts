import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  blogPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPosts$ = this.contentfulService.getAllEntries();

    this.route.params.subscribe(
      params => {
        const id = params['id'];

        //this.blogPosts$ = this.contentfulService.getEntryById(id);
      }
    );
  }

}
