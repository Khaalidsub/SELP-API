import {Field, ID, InputType, ObjectType} from "type-graphql";
import {IUser, role} from "../../util/interface";

@ObjectType()
@InputType("AddUser")
export class User implements IUser {
  universityId: string;
  @Field(() => ID, {nullable: true})
  _id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  role: role;
  @Field()
  phoneNumber: string;
}
