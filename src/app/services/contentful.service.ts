import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  getAllEntries(skip?:number) {
    const promise = this.client.getEntries(
      {
        content_type: 'attrazioniDaVedere',
        order: '-sys.createdAt',
        limit: environment.limit,
        skip: skip
      }
    );
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

}
