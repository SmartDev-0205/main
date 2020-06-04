import {Profile} from 'src/app/interfaces/profile.interface';

export interface User {
  id?: string;
  role?: string;
  projects?: any;
  profile: Profile;
}
