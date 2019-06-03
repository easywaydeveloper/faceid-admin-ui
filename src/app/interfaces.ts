export interface ProfileSummary {
  id: number;
  fullName: string;
  login: string;
  failureCount: number;
  successCount: number;
  clientStatus: ClientStatus;
}

export type ClientStatus = 'ACTIVE' | 'INACTIVE' | 'AUDIT';


export interface ProfileDetails {
  id: number;
  name: string;
  lastName: string;
  login: string;
  email: string;
  imageBase64: string;
  configRequest: {
    jobInterval: number;
    searchFaceDuration: number;
    similarity: number;
  };
}
