import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {Name, Contact, Experience} from '../name';
import {EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private _enrollservice:EnrollmentService) {
  }

  persons: Person[] = [];

  name: Name = new Name('Dima', 'KU');
  experience: Experience = new Experience('Backend', 3, 3);
  contact: Contact = new Contact('Israel', '', 1234567, 'test@test.com');

  person = new Person(null,this.name, this.experience, this.contact, '');

  ngOnInit() {
  }

  loadPersons() {
    this._enrollservice
      .getPersons()
      .subscribe((persons:Person[]) => this.persons = persons)
  }

  onSubmit() {
    this._enrollservice.addPerson(this.person)
      .subscribe(
        (person: Person) => {
          this.persons.push(person);
          console.log(JSON.stringify(person, undefined, 2));
          console.log("hello from component!");
          console.log(JSON.stringify(this.persons, undefined, 2));
          },
        error => console.log('Error!', error)
      )
  }
}
