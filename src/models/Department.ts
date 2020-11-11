import {IModel} from "../util/interface";
import {Subject} from "./Subject";
import {Property} from "@tsed/schema";
import {Model, MongoosePlugin, ObjectID, Ref} from "@tsed/mongoose";
import autopoulate from "mongoose-autopopulate";
import {User} from "./User";

@Model()
@MongoosePlugin(autopoulate)
export class Department implements IModel {
  constructor() {}
  @ObjectID("id")
  _id: string;
  @Property()
  departmentName: string;
  @Ref(Subject)
  subjects: Ref<Subject>[];
  //moderator
  @Ref(User)
  departmentModerator: Ref<User>;
  @Ref(User)
  departmentStudents: Ref<User>[];
  @Ref(User)
  administrator: Ref<User>;
}
