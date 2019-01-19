import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable()
export class RegisterServiceProvider {

  constructor(
    public http: HttpClient,
    public storage: Storage) { }

  public clearUser():void
  {
    this.storage.clear();
  }

  // Retrieves the user's information to be sent to the server.
  public getUser(): Promise<any>
  {
    const promises = [];
    var keys = ['id'];
    keys.forEach( key => promises.push(this.storage.get(key)) );
  
    return Promise.all(promises).then( values => {
      const result = {};
      
      values.map( (value, index) => { 
        result[keys[index]] = value; 
      });
  
      return result;
    });
  }

  public registerUser(credentials: any): Observable<any>
  {
    // Will send information to the website for validation
    return this.http.post<any>(

      // Connects with our API
      "http://assignment.local/register.php", 
      credentials
      ).pipe(
        catchError (
          error => {return Observable.throw(error.error);}
      )
    );
  }
}