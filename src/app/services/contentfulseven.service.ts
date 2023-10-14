import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { dovemangiare } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulsevenService {

  constructor() { }

  private client3 = createClient({
    space: dovemangiare.spaceId,
    accessToken: dovemangiare.accessTokenSeven
  });

  getAllEntriesDoveMangiare() {
    const promise = this.client3.getEntries();
    return from(promise);
  }

  getEntryByDoveMangiare(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
