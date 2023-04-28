import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulsixService } from '../services/contentfulsix.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

  constructor(private contentfulsixservice: ContentfulsixService, private route: ActivatedRoute, private meta: Meta) {}

  shoppingPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    this.shoppingPosts$ = this.contentfulsixservice.getAllEntriesShopping();  
    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    )

    this.meta.addTag({
      name: 'description',
      content: "Esplora i migliori negozi, centri commerciali e mercati di Roma con la nostra guida allo shopping. Trova tutto ciò che cerchi per una \
                splendida esperienza di shopping nella città eterna."
    });
  }
}
