import {Field, ID, InputType, ObjectType} from "type-graphql";
import {IUser, Role, Status} from "../../util/interface";

@ObjectType()
@InputType("AddUser")
export class User implements IUser {
  @Field(() => ID, {nullable: true})
  _id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  role: Role;
  @Field()
  phoneNumber: string;
  @Field()
  universityId: string;
  @Field()
  accountStatus: Status;
}
