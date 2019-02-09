import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/persons';

  constructor(private _http: HttpClient) {}

  getPersons():Observable<Person[]>{
    // return this._http.get<Person[]>(this._url)
    return this._http.get<Person[]>(this._url, {})
  }

  addPerson(person: Person){
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW')
    return this._http.post(this._url, person);
  }



}
