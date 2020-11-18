import {IModel, LessonTime} from "../util/interface";
import {Property} from "@tsed/schema";
import {ObjectID, Ref} from "@tsed/mongoose";
import {Subject} from "../graphql/schema/Subject";
import {User} from "../graphql/schema/User";
import {Coach} from "./Coach";
export class Lesson implements IModel {
  @ObjectID("id")
  _id: string;
  @Property()
  lessonNumber: number;
  // @Property()
  // lessonType: Difficulty; //! change it for the need of e.g 'suggestion','advices'
  @Ref(Subject)
  subject: Ref<Subject>;
  @Ref(User)
  coach: Ref<Coach>;
  @Property()
  scheduled: LessonTime;

  @Ref(User)
  student: Ref<User>;
}
