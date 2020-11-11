import {Service as Servicing, Inject} from "@tsed/di";
import {$log} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {User} from "../models/User";
import {Service} from "./Service";

@Servicing()
export class UserService extends Service<User> {
  constructor(@Inject(User) public model: MongooseModel<User>) {
    super(model);
    $log.info(model);
  }
}
