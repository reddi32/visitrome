import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsixService } from '../services/contentfulsix.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

  constructor(private contentfulsixservice: ContentfulsixService, private route: ActivatedRoute) {}

  shoppingPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.shoppingPosts$ = this.contentfulsixservice.getAllEntriesShopping();  
    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )
  }
}
