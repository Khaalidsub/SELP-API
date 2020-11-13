import {IModel} from "../util/interface";
import {Property} from "@tsed/schema";
import {ObjectID, Schema} from "@tsed/mongoose";
@Schema()
export class Subject implements IModel {
  // constructor() {}
  @ObjectID("id")
  _id: string;
  @Property()
  subjectName: string;
  @Property()
  description: string;
}
