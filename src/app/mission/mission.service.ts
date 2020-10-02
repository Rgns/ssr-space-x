import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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

    return this.http.get(this.getSpaceMissionUrl, {params});
  }

}
