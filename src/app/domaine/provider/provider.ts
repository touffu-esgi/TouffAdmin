import {ProviderProps} from "./providerProps";
import {User} from "../user/user";

export class Provider implements ProviderProps {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  phone?: string;
  address: string;
  base_tariff: number;
  radius: number;
  profile_title: string;
  profile_desc: string;
  userId?: string;
  userObject?: User;
  profile_pic?: string;


  constructor(providerProps: ProviderProps) {
    this.id = providerProps.id!;
    this.name = providerProps.name!;
    this.surname = providerProps.surname!;
    this.email = providerProps.email!;
    this.password = providerProps.password!;
    this.phone = providerProps.phone ? providerProps.phone : '';
    this.address = providerProps.address!;
    this.base_tariff = providerProps.base_tariff!;
    this.radius = providerProps.radius!;
    this.profile_title = providerProps.profile_title!;
    this.profile_desc = providerProps.profile_desc!;
    this.userId = providerProps.userId
    this.userObject = providerProps.userObject;
    this.profile_pic = providerProps.profile_pic;
  }
}


