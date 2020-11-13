import {Field, ID, InputType} from "type-graphql";
import {ICredential, role} from "../../util/interface";

@InputType()
export class Credential implements ICredential {
  @Field(() => ID, {nullable: true})
  _id: string;

  @Field()
  email: string;
  @Field()
  password: string;
  @Field({nullable: true})
  role: role;
}
