import {Property} from "@tsed/schema";
import {Model, ObjectID, Ref, Schema} from "@tsed/mongoose";
import {Department} from "../graphql/schema/Department";
import {User} from "../graphql/schema/User";
import {DayTime, IModel} from "../util/interface";
@Model()
export class CoachSchedule implements IModel {
  @ObjectID("id")
  _id: string;
  @Ref(User)
  coach: Ref<User>;
  @Property()
  week: DayTime[];
}
