import {Controller, Get, Inject} from "@tsed/common";
import {User} from "../models/User";
import {Service} from "../services/Service";
import {UserService} from "../services/UserService";
import {role} from "../util/interface";

@Controller("/hello-world")
export class HelloWorldController {
  constructor(@Inject() public service: UserService) {}
  @Get("/")
  async get() {
    const user = {name: "khaalid", phoneNumber: "011", role: role.student, universityId: "asdsa", password: "jdsklfas"} as User;
    await this.service.add(user);
    console.log(await this.service.findOne({name: user.name}));

    return "hello";
  }
}
