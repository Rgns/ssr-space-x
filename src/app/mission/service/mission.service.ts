import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Mission} from '../model/mission.model';
import {Filter} from '../model/filter.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  public readonly getSpaceMissionUrl = 'https://api.spaceXdata.com/v3/launches';

  constructor(private http: HttpClient) {

  }

  getSpaceMissions(filter: Filter): Observable<Mission[]> {
    const params = this.prepareParams(filter);
    return this.http.get(this.getSpaceMissionUrl, {params})
      .pipe(
        map((data: any) => {
          const missions: Mission[] = data.map((item) => {
            return this.updateMissionObject(item);
          });
          return missions;
        })
      );
  }

  private prepareParams(filter?: Filter): {} {
    const params = {
      limit: filter.limit
    };
    if (filter.launchSuccess) {
      params['launch_success'] = filter.launchSuccess;
    }
    if (filter.landSuccess) {
      params['land_success'] = filter.landSuccess;
    }
    if (filter.launchYear) {
      params['launch_year'] = filter.launchYear;
    }
    return params;
  }

  private updateMissionObject(item: any): Mission {
    const mission = new Mission();
    mission.missionName = item.mission_name;
    mission.flightNumber = item.flight_number;
    mission.missionId = item.mission_id;
    mission.launchYear = item.launch_year;
    mission.launchSuccess = item.launch_success;
    mission.landSuccess = item.rocket.first_stage.cores[0].land_success;
    mission.imgUrl = item.links.mission_patch_small;
    return mission;
  }

}
