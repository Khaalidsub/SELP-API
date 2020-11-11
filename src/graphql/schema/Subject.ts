import {Field, ID, InputType, ObjectType} from "type-graphql";
import {IModel} from "../../util/interface";

@ObjectType()
@InputType("AddSubject")
export class Subject implements IModel {
  constructor() {}
  @Field((type) => ID, {nullable: true})
  _id: string;
  @Field()
  subjectName: string;
  @Field()
  description: string;
}
