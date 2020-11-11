import {Field, ObjectType} from "type-graphql";
import {IResponse} from "../../util/interface";

import {Model} from "./Model";
@ObjectType()
export class Response implements IResponse {
  @Field()
  success: Boolean;
  @Field()
  message: String;
  @Field()
  data?: Model;
}
