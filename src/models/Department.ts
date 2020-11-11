import {IModel, IUser} from "../util/interface";
import {Subject} from "./Subject";
import {Property} from "@tsed/schema";
import {Model, ObjectID, Ref} from "@tsed/mongoose";
import {User} from "./User";
@Model()
export class Department implements IModel {
  constructor() {}
  @ObjectID("id")
  _id: string;
  @Property()
  departmentName: string;
  @Ref(Subject)
  subjects: Ref<Subject>[];
  //moderator
  @Ref(User)
  departmentModerator: Ref<User>;
  @Ref(User)
  departmentStudents: Ref<User>[];
  @Ref(User)
  administrator: Ref<User>;
}
