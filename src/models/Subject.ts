import {IModel} from "../util/interface";
import {Property} from "@tsed/schema";
import {Model, MongoosePlugin, ObjectID} from "@tsed/mongoose";
import autopoulate from "mongoose-autopopulate";
@Model()
@MongoosePlugin(autopoulate)
export class Subject implements IModel {
  constructor() {}
  @ObjectID("id")
  _id: string;
  @Property()
  subjectName: string;
  @Property()
  description: string;
}
