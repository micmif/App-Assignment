import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService 
{
  constructor(
    public http: HttpClient,
    public storage: Storage) 
    { }

    // Clears the user's information on logout
  public clearUser(): void
  {
    this.storage.clear();
  }
    // Retrieves the user's information to be sent to the server.
  public getUser(): Promise<any>
  {
    const promises = [];
    var keys = ['auth_code', 'id'];
    keys.forEach( key => promises.push(this.storage.get(key)) );

    return Promise.all(promises).then( values => {
      const result = {};
      
      values.map( (value, index) => { 
        result[keys[index]] = value; 
      });

      return result;
    });
  }
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
  // Stores the information for a user on this app.
  public storeUser(data: any): void
  {
    // will get the keys from "data" and use them as
    // a foreach loop.
    Object.keys(data).forEach(key => {
      var value = data[key];
      this.storage.set(key, value);
    });
  }
}
