import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsixService } from '../services/contentfulsix.service';

@Component({
  selector: 'app-shopping-post',
  templateUrl: './shopping-post.component.html',
  styleUrls: ['./shopping-post.component.css']
})
export class ShoppingPostComponent {

  constructor(private contentfulsixService: ContentfulsixService, private route: ActivatedRoute) {}

  shoppingPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.shoppingPosts$ = this.contentfulsixService.getEntryByShopping(id);
      }
    )
  }

}
