import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';
import {Observable} from 'rxjs';
import {Skill} from './name';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000';

  constructor(private _http: HttpClient) {
  }

  getPersons(): Observable<Person[]> {
    return this._http.get<Person[]>(this._url + '/persons', {});
  }

  addPerson(person: Person) {
    // debugger
    return this._http.post(this._url + '/persons', person);
  }

  addSkill(skill: Skill) {
    // debugger
    return this._http.post(this._url + '/skills', skill);
  }
}
