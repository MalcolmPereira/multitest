export interface IUser {
    id: number,
    name: string,
    email: string,
}

export const INITIAL_STATE: IUser = {
  id: undefined,
  name: undefined,
  email: undefined,
};

export class User implements IUser {
  id: number;
  name: string;
  email: string;
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
