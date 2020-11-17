import {Property, Enum, CollectionOf} from "@tsed/schema";
import {Model, ObjectID, Ref, Schema} from "@tsed/mongoose";

import {User} from "../graphql/schema/User";
import {Day, IModel} from "../util/interface";
import {Coach} from "./Coach";
@Schema()
export class DayTime {
  @Enum(Day)
  day: Day;
  @Property()
  timeStart: Date;
  @Property()
  timeEnd: Date;
}

@Model()
export class CoachSchedule implements IModel {
  @ObjectID("id")
  _id: string;
  @Ref(User)
  coach: Ref<Coach>;
  @CollectionOf(DayTime)
  week: DayTime[];
}
