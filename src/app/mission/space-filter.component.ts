import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from './model/filter.model';

@Component({
  selector: 'app-space-filter',
  templateUrl: 'space-filter.component.html',
  styleUrls: ['space-filter.component.less']
})
export class SpaceFilterComponent implements OnInit {

  @Input()
  startYear = '2006';

  @Input()
  endYear = '2020';

  @Output()
  filterChange = new EventEmitter<Filter>();

  _years: string[] = [];
  _launchBooleanValue: string[] = ['True', 'False'];
  _landBooleanValue: string[] = ['True', 'False'];
  _launchYear: string;
  _launch: string;
  _land: string;

  private filter: Filter;

  constructor() {
  }

  ngOnInit(): void {
    this.filter = new Filter();
    let temp = +this.startYear;
    while (temp <= +this.endYear) {
      temp++;
      this._years.push(temp.toString());
    }
  }

  _onFilterChange(value: string, key: string): void {
    if (this.filter[key] === value) {
      delete this.filter[key];
    } else {
      this.filter[key] = value;
    }
    this.filterChange.emit(this.filter);
  }

}
