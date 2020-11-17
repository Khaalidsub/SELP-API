import {Property, Enum} from "@tsed/schema";
import {Model, ObjectID, PostHook, PreHook} from "@tsed/mongoose";
import {Status, IUser, Role} from "../util/interface";
import {Department} from "../graphql/schema/Department";
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
  @Enum(Role)
  role: Role;
  @Enum(Status)
  accountStatus: Status;
  @Property()
  pre?: string;
  @Property()
  post?: string;
}
