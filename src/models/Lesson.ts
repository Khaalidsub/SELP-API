import {Difficulty, IModel, LessonTime} from "../util/interface";
import {Property} from "@tsed/schema";
import {Model, ObjectID, PostHook, PreHook, Ref} from "@tsed/mongoose";
import {Subject} from "../graphql/schema/Subject";
import {User} from "../graphql/schema/User";
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
  coach: Ref<User>;
  @Property()
  scheduled: LessonTime;

  @Ref(User)
  student: Ref<User>;
}
