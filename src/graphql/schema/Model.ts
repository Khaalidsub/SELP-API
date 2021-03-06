import {Field, ID, ObjectType} from "type-graphql";
import {IModel} from "../../util/interface";

@ObjectType()
export class Model implements IModel {
  @Field(() => ID, {nullable: true})
  _id: string;
}
