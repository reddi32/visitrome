import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailUtentiService {

  constructor(private http: HttpClient) { }

  insertEmail(url: string, body: {}) {
    return this.http.post(url, body)
  }
}
