import {Component, OnInit} from '@angular/core';
import {MissionService} from './service/mission.service';
import {Mission} from './model/mission.model';
import {Filter} from './model/filter.model';

@Component({
  selector: 'app-mission',
  templateUrl: 'mission.component.html',
  styleUrls: ['mission.component.less']
})
export class MissionComponent implements OnInit {

  _mission: Mission[];

  constructor(private missionService: MissionService) {
  }

  ngOnInit(): void {
    this.getMissions(new Filter());
  }

  _onFilterChange(filter: Filter): void {
    this.getMissions(filter);
  }

  private getMissions(filter: Filter): void {
    this.missionService.getSpaceMissions(filter).subscribe((data: Mission[]) => {
      this._mission = data;
    });
  }
}
