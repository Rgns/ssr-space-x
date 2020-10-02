import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.less']
})
export class SpaceCardComponent implements OnInit {

  @Input()
  missionName: string;

  @Input()
  flightNumber: number;

  @Input()
  missionIds: string[] = [];

  @Input()
  launchYear: string;

  @Input()
  SuccessfulLaunch: boolean;

  @Input()
  SuccessfulLand: boolean;

  @Input()
  imgUrl: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
