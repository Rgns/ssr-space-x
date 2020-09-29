import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.less']
})
export class SpaceCardComponent implements OnInit {

  @Input()
  missionName: string = "FalconSat";

  @Input()
  flightNumber: string = "14";

  @Input()
  missionIds: string[] = ["EE86F74", "EE86F74"];

  @Input()
  launchYear: string = "2009";

  @Input()
  SuccessfulLaunch = true;

  @Input()
  SuccessfulLand = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
