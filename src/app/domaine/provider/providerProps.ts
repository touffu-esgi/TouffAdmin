import {User} from "../user/user";

export class ProviderProps {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  base_tariff?: number;
  radius?: number;
  profile_title?: string;
  profile_desc?: string;
  userId?: string;
  userObject?: User;
}
