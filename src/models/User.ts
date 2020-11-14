import {Property} from "@tsed/schema";
import {Model, ObjectID, PostHook, PreHook} from "@tsed/mongoose";
import {IUser, role} from "../util/interface";
// import autopoulate from "mongoose-autopopulate";
@Model()
// @MongoosePlugin(autopoulate)
@PreHook("save", (user: User, next: any) => {
  user.pre = "hello pre";

  next();
})
@PostHook("save", (user: User, next: any) => {
  user.post = "hello post";

  next();
})
export class User implements IUser {
  // constructor() {}

  @ObjectID("id")
  _id: string;
  @Property()
  email: string;
  @Property()
  universityId: string;
  @Property()
  name: string;
  @Property()
  password?: string;
  @Property()
  phoneNumber: string;
  @Property()
  role: role;

  @Property()
  pre?: string;

  @Property()
  post?: string;
}
