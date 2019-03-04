import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../person';
import {Skill} from '../name';
import {EnrollmentService} from '../enrollment.service';
// import {Skill} from '../name';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  skillsTags: any = [{'display': 'python', 'value': 'python'}];
  skill: {display: string, value: string} = {display: '', value: ''};

  @Output() addSkills = new EventEmitter<{ display: string, value: string }>();
  @Output() removeSkills = new EventEmitter<{ display: string, value: string }>();

  constructor(private _enrollservice: EnrollmentService) {
  }

  ngOnInit() {
  }

  addSkill(event) {
    this.skill.display = event.display;
    this.skill.value = event.value;
    // debugger;
    this.addSkills.emit({
      display: this.skill.display,
      value: this.skill.value
    });

    this._enrollservice.addSkill(this.skill)
      .subscribe(
        (skill: Skill) => {
          // debugger
          // debugger
          // console.log(JSON.stringify(person, undefined, 2));
          // console.log(person.skills);
          // console.log('hello from component!');
          console.log(JSON.stringify(this.skill, undefined, 2));
        },
        error => console.log('Error!', error)
      );

  }

  removeSkill(event) {
    this.skill.display = event.display;
    this.skill.value = event.value;
    // debugger;
    this.removeSkills.emit({
      display: this.skill.display,
      value: this.skill.value
    });
  }
}
