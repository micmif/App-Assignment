import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(
    public http: HttpClient) 
    { }
    
// Observables are structures that are capable of waiting for a request/connection to finish.
    public login(credentials: any): Observable<any>
    {
      // This link is the one that links to series-tracker ; have to link api.assignment
      return this.http.post<any>('http://localhost/php/series-tracker/api/login.php',
      credentials
      ).pipe(
        catchError(error => { return Observable.throw(error);})
      );
    }

}
