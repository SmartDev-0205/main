import { Profile } from './project.interface';

export interface User {
  id?: string;
  role?: string;
  profile: Profile;
}
