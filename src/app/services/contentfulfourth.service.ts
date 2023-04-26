import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { nightlife } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulfourthService {

  constructor() { }

  private client3 = createClient({
    space: nightlife.spaceId,
    accessToken: nightlife.accessTokenFour
  });

  getAllEntriesNightlife() {
    const promise = this.client3.getEntries();
    return from(promise);
  }

  getEntryByIdNightlife(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
