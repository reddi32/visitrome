import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { romainfamiglia } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulfiveService {

  constructor() { }

  private client3 = createClient({
    space: romainfamiglia.spaceId,
    accessToken: romainfamiglia.accessTokenFive
  });

  getAllEntriesRomaInFamiglia() {
    const promise = this.client3.getEntries();
    return from(promise);
  }

  getEntryByIdRomaInFamiglia(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
