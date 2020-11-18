import {IModel} from "../util/interface";
import {Subject} from "./Subject";
import {Property} from "@tsed/schema";
import {Model, ObjectID, Ref} from "@tsed/mongoose";
// import autopoulate from "mongoose-autopopulate";
import {User} from "./User";

@Model()
// @MongoosePlugin(autopoulate)
export class Department implements IModel {
  @ObjectID("id")
  _id: string;
  @Property()
  departmentName: string;
  @Ref(Subject)
  subjects: Ref<Subject>[];
  @Ref(User)
  departmentModerator: Ref<User>;
}
