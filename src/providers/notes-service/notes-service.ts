import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class NotesServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NotesServiceProvider Provider');
  }

}
