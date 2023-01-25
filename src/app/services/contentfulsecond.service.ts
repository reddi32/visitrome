import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { attraction, concert } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulsecondService {

  constructor() { }

  /*Client per i post delle attrazioni turistiche*/
  private client2 = createClient({
    space: attraction.spaceIdTwo,
    accessToken: attraction.accessTokenTwo
  });

  getAllEntriesAttraction() {
    const promise = this.client2.getEntries();
    return from(promise);
  }

  getEntryByIdAttraction(id: string) {
    const promise = this.client2.getEntry(id);
    return from(promise);
  }

}
