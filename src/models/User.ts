import {Property} from "@tsed/schema";
import {Model, ObjectID, PostHook, PreHook, Ref} from "@tsed/mongoose";
import {AccountStatus, IUser, Role} from "../util/interface";
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
  @Property()
  role: Role;
  @Property()
  accountStatus: AccountStatus;
  @Property()
  pre?: string;
  @Property()
  post?: string;
}
