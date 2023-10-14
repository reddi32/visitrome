import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { concert } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfultirdService {

  constructor() { }

  private client3 = createClient({
    space: concert.spaceIdTwo,
    accessToken: concert.accessTokenThree
  });

  getAllEntriesConcert() {
    const promise = this.client3.getEntries();
    return from(promise);
  }

  getEntryByIdConcert(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
