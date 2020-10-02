import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MissionService} from './service/mission.service';
import {Mission} from './model/mission.model';
import {Filter} from './model/filter.model';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-mission',
  templateUrl: 'mission.component.html',
  styleUrls: ['mission.component.less']
})
export class MissionComponent implements OnInit {

  _mission: Mission[];

  constructor(private missionService: MissionService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .pipe(skip(1))
      .subscribe((params: ParamMap) => {
        const filter: Filter = this.updateFilter(params);
        this.getMissions(filter);
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
      this._mission = JSON.parse(JSON.stringify(data));
      this.cdr.detectChanges();
    });
  }

  private updateFilter(params: Params): Filter {
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
