export enum role {
  student = "STUDENT",
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
  _id: String;
}
