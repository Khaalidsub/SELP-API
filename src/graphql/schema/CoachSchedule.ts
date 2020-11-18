import {ID, ObjectType} from "type-graphql";
import {Field} from "type-graphql/dist/decorators/Field";
import {DayTime} from "../../models/CoachSchedule";
import {IModel} from "../../util/interface";
import {Coach} from "./Coach";

@ObjectType()
export class CoachSchedule implements IModel {
  @Field(() => ID, {nullable: true})
  _id: string;
  @Field()
  coach: Coach;
  @Field(() => [DayTime], {})
  week: DayTime[];
  //moderator
}
