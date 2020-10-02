import {Component, OnInit} from '@angular/core';
import {MissionService} from './mission.service';
import {Mission} from './model/mission.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less']
})
export class MissionComponent implements OnInit {

  _mission: Mission[];

  constructor(private missionService: MissionService) {
  }

  ngOnInit(): void {
    this.missionService.getSpaceMissions().subscribe((data: Mission[]) => {
      console.log(data);
      this._mission = data;
    });
  }

}
