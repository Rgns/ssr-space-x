import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Mission} from './model/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private readonly getSpaceMissionUrl = 'https://api.spaceXdata.com/v3/launches';

  constructor(private http: HttpClient) {

  }

  getSpaceMissions(pageSize = '10',
                   launch?: string,
                   land?: string,
                   year?: string): Observable<any> {
    const params = {
      limit: pageSize
    };
    if (launch) {
      params['launch_success'] = launch;
    }
    if (land) {
      params['land_success'] = land;
    }
    if (land) {
      params['launch_year'] = year;
    }

    return this.http.get(this.getSpaceMissionUrl, {params})
      .pipe(
        map((data: any) => {
          const missions: Mission[] = data.map((item) => {
            const mission = new Mission();
            mission.missionName = item.mission_name;
            mission.flightNumber = item.flight_number;
            mission.missionId = item.mission_id;
            mission.launchYear = item.launch_year;
            mission.launchSuccess = item.launch_success;
            mission.landSuccess = item.rocket.first_stage.cores[0].land_success;
            mission.imgUrl = item.links.mission_patch_small;
            return mission;
          });
          return missions;
        })
      );
  }

}
