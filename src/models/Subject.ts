import {IModel} from "../util/interface";
import {Property} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class Subject implements IModel {
  @ObjectID("id")
  _id: string;
  @Property()
  subjectName: string;
  @Property()
  description: string;
}
