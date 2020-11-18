import {ID, ObjectType} from "type-graphql";
import {Field} from "type-graphql/dist/decorators/Field";
import {SubjectSpecialization} from "../../models/Coach";
import {IModel} from "../../util/interface";
import {Subject} from "./Subject";
import {User} from "./User";

@ObjectType()
export class Coach implements IModel {
  @Field(() => ID, {nullable: true})
  _id: string;
  @Field()
  information: string;
  @Field(() => [SubjectSpecialization], {})
  specializations: Subject[];
  //moderator

  @Field(() => User, {})
  user: User;
}
