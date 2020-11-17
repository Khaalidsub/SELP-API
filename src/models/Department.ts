import {IModel} from "../util/interface";
import {Subject} from "./Subject";
import {Property, CollectionOf} from "@tsed/schema";
import {Model, ObjectID, Ref} from "@tsed/mongoose";
// import autopoulate from "mongoose-autopopulate";
import {User} from "./User";

@Model()
// @MongoosePlugin(autopoulate)
export class Department implements IModel {
  // constructor() {}
  @ObjectID("id")
  _id: string;
  @Property()
  departmentName: string;
  @CollectionOf(Subject)
  subjects: Subject[];
  //moderator
  @Ref(User)
  departmentModerator: Ref<User>;
}
