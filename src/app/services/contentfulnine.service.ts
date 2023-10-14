import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { attivitaperbambini } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulnineService {

  constructor() { }

  private client3 = createClient({
    space: attivitaperbambini.spaceId,
    accessToken: attivitaperbambini.accessTokenNine
  });

  getAllEntriesAttivitaPerBambini() {
    const promise = this.client3.getEntries();
    return from(promise);
  }

  getEntryByIdAttivitaPerBambini(id: string) {
    const promise = this.client3.getEntry(id);
    return from(promise);
  }
}
