import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { shopping } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulsixService {

  constructor() { }

  private client3 = createClient({
    space: shopping.spaceId,
    accessToken: shopping.accessTokenSix
  });

  getAllEntriesShopping() {
    const promise = this.client3.getEntries();
    return from(promise);
  }

  getEntryByShopping(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
