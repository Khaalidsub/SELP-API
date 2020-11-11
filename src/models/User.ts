import {Property} from "@tsed/schema";
import {Model, ObjectID, MongoosePlugin} from "@tsed/mongoose";
import {IUser, role} from "../util/interface";
import autopoulate from "mongoose-autopopulate";
@Model()
@MongoosePlugin(autopoulate)
export class User implements IUser {
  constructor() {}
  @ObjectID("id")
  _id: string;
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
}
