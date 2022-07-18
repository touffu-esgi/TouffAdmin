export class Recipient {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: string;

  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    password: string,
    address: string,
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.address = address;
  }
}
