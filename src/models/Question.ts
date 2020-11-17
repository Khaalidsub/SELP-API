import {Difficulty, IModel} from "../util/interface";
import {Property, CollectionOf, Enum} from "@tsed/schema";
import {Model, ObjectID, Ref, Schema} from "@tsed/mongoose";
import {Subject} from "../graphql/schema/Subject";
import {User} from "./User";

@Schema()
export class Answer {
  @ObjectID("id")
  _id: string;
  @Property()
  input: string;
  @Property()
  upvotes: number;
  @Ref(User)
  user: Ref<User>;
}
@Model()
export class Question implements IModel {
  @ObjectID("id")
  _id: string;
  @Property()
  question: string;
  @Ref(User)
  user: User;
  @CollectionOf(Answer)
  answers?: Answer[];
  @Property()
  correctAnswer?: Answer;
  @Enum(Difficulty)
  difficulty: Difficulty;
  @Ref(Subject)
  subject: Ref<Subject>;
}
