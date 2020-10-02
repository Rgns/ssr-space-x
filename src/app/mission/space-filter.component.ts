import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-space-filter',
  templateUrl: './space-filter.component.html',
  styleUrls: ['./space-filter.component.less']
})
export class SpaceFilterComponent implements OnInit {

  @Input()
  startYear = 2006;

  @Input()
  endYear = 2020;

  _years: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    let temp = this.startYear;
    while (temp <= this.endYear) {
      this._years.push(temp++);
    }

  }

}
