import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) { }

  blogPost$ : Observable<any> | undefined;
  contenuto : any;
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.blogPost$ = this.contentfulService.getEntryById(id);

      }
    );
   /*console.log(this.blogPost$?.forEach( (value : any) => console.log(value.fields.content.content[0].content.forEach((v : any) => console.log(v.marks[0])))));*/




  }

}
