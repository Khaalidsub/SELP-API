export enum role {
  student = "STUDENT",
  coach = "COACH",
  admin = "ADMIN",
  moderator = "MODERATOR",
}

export interface IUser extends IModel {
  name: string;
  password?: string;
  email: string;
  phoneNumber: string;
  universityId: string;
  role: role;
}
export interface IResponse {
  success: Boolean;
  message: String;
  data?: IModel | IModel[];
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
export interface IController<T> {
  getAll(): Promise<T[]>;
  add(obj: T): Promise<T>;
  getOne(id: string): Promise<T>;
  update(obj: T): Promise<T>;
  edit(obj: T): Promise<T>;
  delete(id: string): Promise<boolean>;
}
