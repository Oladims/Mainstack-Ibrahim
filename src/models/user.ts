export interface User {
  first_name: string;
  last_name: string;
  email: string;
}

export class UserData implements User {
  constructor(data: User) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
  }
  first_name: string;
  last_name: string;
  email: string;
}
