import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { attraction, concert } from '../../environments/environment';
import { query } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulsecondService {

  constructor() { }

  /*Client per i post delle attrazioni turistiche*/
  private client2 = createClient({
    space: attraction.spaceIdTwo,
    accessToken: attraction.accessTokenTwo,
  });

  getAllEntriesAttraction(skip?:number) {
    const promise = this.client2.getEntries(
      {
        content_type: 'attractionPost',
        order: 'fields.title',
        limit: attraction.limit,
        skip: skip
      }
    );
    return from(promise);
  }

  getEntryByIdAttraction(id: string) {
    const promise = this.client2.getEntry(id);
    return from(promise);
  }

  getEntryByQuery(id: string) {
    const promise = this.client2.getEntry(id);
    return from(promise);
  }

}
