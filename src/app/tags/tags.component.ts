import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Skill} from '../name';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  skills: Skill[] = [{display: 'javaaa', value: 'key'}];
  // skills: {[key:string]:string} = {javaa:'javaaa'};
  skill: Skill = {display: '', value: ''};

  @Output() changeSkills = new EventEmitter<{ display: string, value: string }>();
  @Output() removeSkills = new EventEmitter<{ display: string, value: string }>();



  constructor() {
  }

  ngOnInit() {
  }

  addSkill(event) {
    this.skill.display = event.display;
    this.skill.value = event.value;
    // debugger;
    this.changeSkills.emit({
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

  // onBlur(event){
  //   debugger
  //   this.onChangeSkills.emit({
  //     display: this.skill.display,
  //     value: this.skill.value
  //   })
  // }
  // onFocus(event){
  //   debugger
  //   this.onChangeSkills.emit({
  //     display: this.skill.display,
  //     value: this.skill.value
  //   })
  // }
  // onSelect(event){
  //   debugger
  //   this.onChangeSkills.emit({
  //     display: this.skill.display,
  //     value: this.skill.value
  //   })
  // }
  //
  // onChange(){
  //   debugger
  //   this.onChangeSkills.emit({
  //     display: this.skill.display,
  //     value: this.skill.value
  //   })
  //}

}
