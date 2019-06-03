import { ProfileDetailsRS, ProfileSummary } from 'src/app/interfaces';

export const PROFILES_RS_MOCK: ProfileSummary[] = [
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

export const PROFILE_DETAILS_COLLECTION_MOCK: ProfileDetailsRS[] = [
  {
    id: 1,
    name: 'Dmitry',
    lastName: 'Grishchenko',
    login: 'test',
    email: 'test@test.com',
    imagePath: './assets/pitta.jpg',
    configRequest: {
      jobInterval: 3600,
      searchFaceDuration: 20,
      similarity: 0.8,
    },
    authAlerts: [
      {
        dateTime: '2012-02-03 12:56:34',
        photoPath: './assets/pitta.jpg',
        authStatus: 'FAILURE',
        description: 'Some error happened',
      },
      {
        dateTime: '2012-02-03 13:00:00',
        photoPath: './assets/kerala.jpg',
        authStatus: 'FAILURE',
        description: 'Some error happened',
      },
      {
        dateTime: '2012-02-03 13:01:00',
        photoPath: './assets/pitta.jpg',
        authStatus: 'FAILURE',
        description: 'Some error happened',
      },
      {
        dateTime: '2012-02-03 13:01:42',
        photoPath: './assets/pitta.jpg',
        authStatus: 'FAILURE',
        description: 'Some error happened',
      },
      {
        dateTime: '2012-02-04 13:02:00',
        photoPath: './assets/pitta.jpg',
        authStatus: 'FAILURE',
        description: 'Some error happened',
      },
    ],
  },
  {
    id: 2,
    name: 'Igor',
    lastName: 'Jarko',
    login: 'test',
    email: 'test@test.com',
    imagePath: './assets/kerala.jpg',
    configRequest: {
      jobInterval: 3600,
      searchFaceDuration: 20,
      similarity: 0.8,
    },
    authAlerts: [],
  },
  {
    id: 3,
    name: 'Petro',
    lastName: 'Ivanov',
    login: 'test',
    email: 'test@test.com',
    imagePath: '',
    configRequest: {
      jobInterval: 3600,
      searchFaceDuration: 20,
      similarity: 0.8,
    },
    authAlerts: [],
  },
];
