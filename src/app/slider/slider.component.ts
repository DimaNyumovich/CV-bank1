import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  @Output() changeSalary = new EventEmitter<{minS: number, maxS: number}>();


  toChangeVolue() {
    //debugger
    this.changeSalary.emit({
      minS: this.value,
      maxS: this.highValue
    })

  }

}
