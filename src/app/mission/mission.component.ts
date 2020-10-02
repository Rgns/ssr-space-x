import {Component, OnInit} from '@angular/core';
import {MissionService} from './mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.less']
})
export class MissionComponent implements OnInit {

  constructor(private missionService: MissionService) {
  }

  ngOnInit(): void {
    this.missionService.getSpaceMissions().subscribe((data) => {
      console.log(data);
    });
  }

}
