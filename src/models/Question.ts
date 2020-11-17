import {Answer, Difficulty, IModel} from "../util/interface";
import {Property} from "@tsed/schema";
import {Model, ObjectID, Ref} from "@tsed/mongoose";
import {Subject} from "../graphql/schema/Subject";
import {User} from "./User";
@Model()
export class Question implements IModel {
  @ObjectID("id")
  _id: string;
  @Property()
  question: string;
  @Ref(User)
  user: User;
  @Property()
  answers?: Answer[];
  @Property()
  correctAnswer?: Answer;
  @Property()
  difficulty: Difficulty;
  @Ref(Subject)
  subject: Ref<Subject>;
}
