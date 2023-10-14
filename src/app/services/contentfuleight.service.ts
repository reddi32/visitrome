import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { mostre } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfuleightService {

  constructor() { }

  private client3 = createClient({
    space: mostre.spaceId,
    accessToken: mostre.accessTokenEight
  });

  getAllEntriesMostre() {
    const promise = this.client3.getEntries(
      {
        content_type: 'mostre',
        order: 'fields.title'
      }
    );
    return from(promise);
  }

  getEntryByIdMostre(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
