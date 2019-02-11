import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  constructor() {
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
