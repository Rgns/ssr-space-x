import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MissionService} from './service/mission.service';
import {Mission} from './model/mission.model';
import {Filter} from './model/filter.model';
import {ActivatedRoute, ActivationEnd, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: 'mission.component.html',
  styleUrls: ['mission.component.less']
})
export class MissionComponent implements OnInit {

  _mission: Mission[];
  _filter: Filter;

  constructor(private missionService: MissionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((d) => {
      if (d instanceof ActivationEnd) {
        const params = this.activatedRoute.snapshot.queryParamMap;
        this._filter = this.updateFilter(params);
        this.getMissions(this._filter);
      }
    });
  }


  _onFilterChange(filter: Filter): void {
    this.updateRoute(filter);
    this.getMissions(filter);
  }

  private updateRoute(filter: Filter): void {
    this.router.navigate(['/missions'], {
      queryParams: {
        launchYear: filter.launchYear,
        launchSuccess: filter.launchSuccess,
        landSuccess: filter.landSuccess
      }
    });
  }

  private getMissions(filter: Filter): void {
    this.missionService.getSpaceMissions(filter).subscribe((data: Mission[]) => {
      this._mission = data;
    });
  }

  private updateFilter(params: ParamMap): Filter {
    const filter = new Filter();
    if (params.get('launchSuccess')) {
      filter.launchSuccess = params.get('launchSuccess');
    }
    if (params.get('landSuccess')) {
      filter.landSuccess = params.get('landSuccess');
    }
    if (params.get('launchYear')) {
      filter.launchYear = params.get('launchYear');
    }
    return filter;
  }
}
