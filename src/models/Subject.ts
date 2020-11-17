import {IModel} from "../util/interface";
import {Property} from "@tsed/schema";
import {Model, ObjectID, Ref, Schema} from "@tsed/mongoose";
import {Department} from "../graphql/schema/Department";
@Model()
export class Subject implements IModel {
  @ObjectID("id")
  _id: string;
  @Property()
  subjectName: string;
  @Property()
  description: string;
}
