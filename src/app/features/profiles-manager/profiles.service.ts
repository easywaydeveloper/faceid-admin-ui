import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProfileDetails, ProfileSummary } from 'src/app/interfaces';
import { delay } from 'rxjs/operators';

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
    // return this.http.get<Profile[]>(`${this.baseUrl}${this.configApiUrls.clients}`);
    const rsMock: ProfileSummary[] = [
      {
        id: 1,
        fullName: 'Dmitry Grishchenko',
        login: 'dgry',
        failureCount: 20,
        successCount: 10,
        clientStatus: 'ACTIVE',
      },
      {
        id: 2,
        fullName: 'Igor Jarko',
        login: 'jar',
        failureCount: 0,
        successCount: 5,
        clientStatus: 'AUDIT',
      },
      {
        id: 3,
        fullName: 'Petro Ivanov',
        login: 'giro',
        failureCount: 10,
        successCount: 2,
        clientStatus: 'INACTIVE',
      },
    ];

    return of(rsMock.slice()).pipe(delay(500));
  }

  getProfile(id: number): Observable<ProfileDetails> {
    // return this.http.get<ProfileDetails>(`${this.baseUrl}${this.configApiUrls.clients}/${id}`);
    const collection: ProfileDetails[] = [
      {
        id: 1,
        name: 'Dmitry',
        lastName: 'Grishchenko',
        login: 'test',
        email: 'test@test.com',
        imageBase64: './assets/pitta.jpg',
        configRequest: {
          jobInterval: 3600,
          searchFaceDuration: 20,
          similarity: 0.8,
        },
      },
      {
        id: 2,
        name: 'Igor',
        lastName: 'Jarko',
        login: 'test',
        email: 'test@test.com',
        imageBase64: './assets/kerala.jpg',
        configRequest: {
          jobInterval: 3600,
          searchFaceDuration: 20,
          similarity: 0.8,
        },
      },
      {
        id: 3,
        name: 'Petro',
        lastName: 'Ivanov',
        login: 'test',
        email: 'test@test.com',
        imageBase64: '',
        configRequest: {
          jobInterval: 3600,
          searchFaceDuration: 20,
          similarity: 0.8,
        },
      },
    ];

    const rsMock: ProfileDetails = collection.find((profile) => profile.id === id);
    return of(rsMock).pipe(delay(1000));
  }
}
