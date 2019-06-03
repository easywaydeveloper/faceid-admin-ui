import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, /*of*/ } from 'rxjs';
import { ProfileDetailsRS, ProfileSummary } from 'src/app/interfaces';
// import { delay } from 'rxjs/operators';
// import { PROFILE_DETAILS_COLLECTION_MOCK, PROFILES_RS_MOCK } from 'src/app/mocks/mocks';

@Injectable()
export class ProfilesService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8085';
  private configApiUrls = {
    clients: '/api/clients',
  };

  createProfile(payload) {
    console.log('serv', payload);
    return this.http.post(`${this.baseUrl}${this.configApiUrls.clients}`, payload);
  }

  getProfiles(): Observable<ProfileSummary[]> {
    return this.http.get<ProfileSummary[]>(`${this.baseUrl}${this.configApiUrls.clients}`);
    // return of(PROFILES_RS_MOCK.slice()).pipe(delay(500));
  }

  getProfile(id: number): Observable<ProfileDetailsRS> {
    return this.http.get<ProfileDetailsRS>(`${this.baseUrl}${this.configApiUrls.clients}/${id}`);

    // const rsMock: ProfileDetailsRS = PROFILE_DETAILS_COLLECTION_MOCK.find((profile) => profile.id === id);
    // return of(rsMock).pipe(delay(1000));
  }

}
