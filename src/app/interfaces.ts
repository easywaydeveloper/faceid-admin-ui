export interface ProfileSummary {
  id: number;
  fullName: string;
  login: string;
  failureCount: number;
  successCount: number;
  clientStatus: ClientStatus;
}

export type ClientStatus = 'ACTIVE' | 'INACTIVE' | 'AUDIT';


export interface ProfileDetailsRS {
  id: number;
  name: string;
  lastName: string;
  login: string;
  email: string;
  imagePath: string;
  configRequest: {
    jobInterval: number;
    searchFaceDuration: number;
    similarity: number;
  };
  authAlerts: Alert[];
}

export interface Alert {
  dateTime: string;
  photoPath: string;
  authStatus: string;
  description: string;
}
