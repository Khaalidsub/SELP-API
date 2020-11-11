export enum role {
  student = "STUDENT",
  coach = "COACH",
  admin = "ADMIN",
  moderator = "MODERATOR",
}

export interface IUser extends IModel {
  name: string;
  password?: string;
  phoneNumber: string;
  universityId: string;
  role: role;
}

export interface ICredential {
  email: string;
  password: string;
}
export interface IModel {
  _id: string;
}

export interface IService<T> {
  add(obj: T): any;
  find({query}: any): any;
  findOne({query}: any): any;
  findById(id: String): any;
  set(obj: T): any;
  delete(id: String): Promise<boolean>;
}
