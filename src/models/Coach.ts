import {Model, ObjectID, Ref, Schema} from "@tsed/mongoose";
import {Property, CollectionOf, Enum} from "@tsed/schema";
import {Subject} from "../graphql/schema/Subject";
import {User} from "../graphql/schema/User";
import {Status} from "../util/interface";
@Schema()
export class SpecializationType {
  @ObjectID("id")
  _id: string;
  @Property()
  title: string;
  @Property()
  description: string;
}

//!this thing will be voted by the students later
@Schema()
export class SubjectSpecialization {
  @ObjectID("id")
  _id: string;
  @Ref(Subject)
  subject: Ref<Subject>;
  @CollectionOf(SpecializationType)
  subjectSpecializations: SpecializationType[];
  @Enum(Status)
  subjectStatus: Status;
  @Property()
  upvotes: number;
}

@Model()
export class Coach extends User {
  @ObjectID("id")
  _id: string;
  @Property()
  information: string;
  @CollectionOf(SubjectSpecialization)
  specializations: SubjectSpecialization[];
  @Ref(User)
  user: Ref<User>;
}
