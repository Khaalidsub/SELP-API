import {ID, ObjectType} from "type-graphql";
import {Field} from "type-graphql/dist/decorators/Field";
import {IModel} from "../../util/interface";
import {Subject} from "./Subject";
import {User} from "./User";

@ObjectType()
export class Department implements IModel {
  @Field(() => ID, {nullable: true})
  _id: string;
  @Field()
  departmentName: string;
  @Field(() => [Subject], {})
  subjects: Subject[];
  //moderator
  @Field(() => User, {})
  departmentModerator: User;
  @Field(() => User, {})
  departmentStudents: User[];
  @Field(() => User, {})
  administrator: User;
}
